import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ResponseDataModel } from "../travel-history/travel-history.model";
import { ViolationRequestModel } from './Violation.model'

@Component({
  selector: "app-violation",
  templateUrl: "./violation.component.html",
  styleUrls: ["./violation.component.scss"],
})
export class ViolationComponent implements OnInit {

  // EventList: any [] = [
  //   {name:"Overspeed", value:"255-0"},
  //   {name:"Harsh Accelaration", value:"253-1"},
  //   {name:"Harsh Braking", value:"253-2"},
  //   {name:"Harsh Cornering", value:"253-3"},
  // ];

  EventList = [
    {name:"Over Speed", value:"255-0"},
    {name:"Harsh Accelaration", value:"253-1"},
    {name:"Harsh Braking", value:"253-2"},
    {name:"Harsh Cornering", value:"253-3"},
  ];

  ViolationRequest:ViolationRequestModel ={};
  ResponseModel: ResponseDataModel={
    success: false,
    data:''
  };

  startDate = new FormControl(new Date());
  endDate = new  FormControl(new Date());

  LastSync: string;
  eventname = '';
  LastSyncSpinner = true;
  isSpinner = true;
  dSpinner = false;
  CSVSpinner = false;
  search: any;
  zoom = 18;
  page = 1;
  pageSize = 10;
  imeiDetails = [];
  imeiDetails2 = [];
  sortDir = 1;
  eventType: string;
  constructor(private http: HttpClient, private modalService: NgbModal) {}
  violationReport = [];
  AvlDetails = [];
  lat;
  lng;
  selectedValue = 1;
  booleanValue: any = false;
  ngOnInit(): void {
    this.LastSyncSpinner = true;
    this.http.get<{data: [{ q_TimeStamp: string}]}>('https://airflowvts.gwclogistics.com:4430/api/v1/newapi/LastSync')
    .subscribe((response) => {
      this.LastSyncSpinner = false;
      this.LastSync = response.data[0].q_TimeStamp.replace(/T|Z/gi,' ');
    })
  }

  onSelectedChange(value: number) {
    // do something else with the value
    console.log(value);

    // rememberto update the selectedValue
    this.pageSize = value;
    this.violationReport = this.violationReport;
  }

  sortFunction(colName, boolean) {
    console.log('sorting');
    if (boolean == true){
        this.violationReport.sort((a, b) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
    else{
        this.violationReport.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
        this.booleanValue = !this.booleanValue
    }
}
  add(a: number) {
    this.pageSize = a;
    this.violationReport = this.violationReport;
    console.log("clicked oprtion");
  }
  popup = false;
  popup1 = false;

  changeLocation(a, b) {
    this.lat = a;
    this.lng = b;
    this.popup = true;
  }

  getDetailsByIMEI(content) {
    this.dSpinner = true;
    this.modalService.open(content, { size: "lg" });
    const data = {
      ioValue: this.ViolationRequest.ioValue,
      eventIOId: this.ViolationRequest.eventIOId,
      imei: this.ViolationRequest.imei,
      timeStamp: this.ViolationRequest.timeStamp
    };
    this.http
      .post("https://airflowvts.gwclogistics.com:4430/api/v1/newapi/avl-details", { data })
      .subscribe((result) => {
        // console.log(result);
        // console.log(result);
        this.dSpinner = false;
        const data: any = result;
        this.eventType = this.ViolationRequest.eventType;
        this.imeiDetails = [];
        this.imeiDetails2 = [];

        this.imeiDetails.push(result[0]);

        for (let i = 0; i < data.length; i++) {
          this.imeiDetails2.push(result[i]);
        }
        console.log(this.imeiDetails);
      });
  }
  filterData() {
    this.isSpinner = false;
    for(let i=0; i< this.EventList.length; i++){
      if(this.ViolationRequest.eventType == this.EventList[i].value){
        this.eventname = this.EventList[i].name;
      }
    }
    const data = {
      startDate: this.ViolationRequest.startDate.replace(/T/gi,' ') + ':00.000',
      endDate: this.ViolationRequest.endDate.replace(/T/gi,' ') + ':00.000',
      eventType: this.ViolationRequest.eventType
    };
    this.http
      .post("https://airflowvts.gwclogistics.com:4430/api/v1/newapi/violation-Report", { data })
      .subscribe((result) => {
        // console.log(result);
        // console.log(result);
        this.isSpinner = true;
        const data: any = result;
        this.violationReport = [];
        for (let i = 0; i < data.length; i++) {
          this.violationReport.push(data[i]);
        }
      });
    console.log(this.violationReport);
  }
  onChangeSearch() {
    console.log("changes in serch");
    this.pageSize = this.violationReport.length;
    if (this.search === "") {
      this.pageSize = 10;
    }
  }
  /* getDetailsByAvl(avlno, eventId, ioValue, timeStamp) {
    const data = {
      avlno: avlno,
      eventId: eventId,
      ioValue: ioValue,
      TimeStamp: timeStamp,
    };
    this.http
      .post("https://airflowvts.gwclogistics.com:4430/api/v1/newapi/avl-details", { data })
      .subscribe((result) => {
        // console.log(result);
        // console.log(result);
        const data: any = result;
        this.AvlDetails = [];
        for (let i = 0; i < data.length; i++) {
          this.AvlDetails.push(data[i]);
        }
        console.log(this.AvlDetails);
      });
  } */

  DownloadViolationReport() { 
    const replacer = (key, value) => (value === null ? '' : value); // specify how you want to handle null values here
  const header = Object.keys(this.violationReport[0]);
  const csv = this.violationReport.map((row) =>
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
  a.download = 'Violation-Report.csv';
  a.click();
  }
  
  

}


