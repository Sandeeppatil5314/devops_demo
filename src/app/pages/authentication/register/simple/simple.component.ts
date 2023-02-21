import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from "../../../../shared/services/http.service";
import { CommonService } from "../../../../shared/services/common.service";
@Component({
  selector: 'app-register-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class RegisterSimpleComponent implements OnInit {

  public show: boolean = false;
  formGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    public toster: ToastrService,
    private commonService: CommonService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      website: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  showPassword() {
    this.show = !this.show;
  }
  register(){
    let obj: any = Object.assign({}, this.formGroup.value);
    this.httpService.postToAPI2('api/auth/register',obj)
    .then((res:any)=>{
        if(res.status == 'success'){
          this.toster.success(res.message, '', {
              tapToDismiss: true,
              closeButton: true,
              disableTimeOut: true
          });
          this.commonService.handleRoute('authentication/login/simple');
        }else{
          this.toster.success(res.message, '', {
            tapToDismiss: true,
            closeButton: true,
            disableTimeOut: true
          });
        }
        // this.registerForm.reset();
    }).catch((err: any) => {
        this.toster.error(err.message, '', {
            tapToDismiss: true,
            closeButton: true,
            disableTimeOut: true
        });
    });
  }
}
