import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FleetMasterRequestModel } from '../fleet-master/fleet-master.model'
import { ResponseDataModel } from '../travel-history/travel-history.model';

@Component({
  selector: 'app-fleet-master',
  templateUrl: './fleet-master.component.html',
  styleUrls: ['./fleet-master.component.scss']
})
export class FleetMasterComponent implements OnInit {

  ShowNumber: any [] = [
   {name:"All", value:"All"},
   {name:"10", value:"10"},
   {name:"50", value:"50"},
  ];

  ResponseModel: ResponseDataModel = {
    success: false,
    data:'',
    ResponseTime:0
  };

  CSVSpinner = false;
  FleetMasterRequest: FleetMasterRequestModel = {}
  fleetmaster = [];
  search: any;
  page = 1;
  pageSize = 10;
  booleanValue: any = false;
  constructor(private http: HttpClient,private modalService: NgbModal) { }

  ngOnInit() {
    this.FleetMaster();
  }

  FleetMaster() {
    this.http.get<any>
    ('https://airflowvts.gwclogistics.com:4430/api/v1/newapi/FleetMaster')
    .subscribe((response)=> {
      this.fleetmaster = response.data;
    });
  }

  onSelectedChange(value: number) {
   this.pageSize = value;
   this.fleetmaster = this.fleetmaster;
  }

  sortFunction(colName, boolean) {
    console.log('sorting');
    if (boolean == true){
        this.fleetmaster.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
    else{
        this.fleetmaster.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
}

// CreateCSV(modal) { 
//   this.modalService.open(modal, { size: 'md' });
//   this.CSVSpinner = true;
//     this.http
//       .get("https://airflowvts.gwclogistics.com:4430/api/v1/newapi/createCsvFM")
//       .subscribe((result: ResponseDataModel) => {
//         console.log(result);
//         this.CSVSpinner = false;
//         this.FleetMasterRequest.file_name = result.data;
//         this.ResponseModel.success = result.success;
//         console.log(this.ResponseModel);
//       });
// }

DownloadFleetMasterReport() {
  const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
  const header = Object.keys(this.fleetmaster[0]);
  const csv = this.fleetmaster.map((row) =>
    header
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(',')
  );
  csv.unshift(header.join(','));
  const csvArray = csv.join('\r\n');

  const a = document.createElement('a');
  const blob = new Blob([csvArray], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);

  a.href = url;
  a.download = 'Fleet-Master-Report.csv';
  a.click();
}

}
