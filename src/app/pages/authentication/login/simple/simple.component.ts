import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from "../../../../shared/services/http.service";
import { CommonService } from "../../../../shared/services/common.service";
import { StorageService } from "../../../../shared/services/storage.service";

@Component({
  selector: 'app-login-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class LoginSimpleComponent implements OnInit {

  public show: boolean = false;
  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public toster: ToastrService,
    private commonService: CommonService,
    private storageService: StorageService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  showPassword() {
    this.show = !this.show;
  }

  login(){
    let obj: any = Object.assign({}, this.formGroup.value);
    this.httpService.postToAPI2('api/auth/login',obj)
    .then((res:any)=>{
        if(res.status == 'success'){
          this.toster.success(res.message, '', {
              tapToDismiss: true,
              closeButton: true,
              disableTimeOut: true
          });
          localStorage.setItem("user",JSON.stringify(res.data));
          this.storageService.setCookie("isLoggedIn",true);
          this.commonService.LoggedIn = true;
          this.commonService.userData = res.data;
          this.commonService.handleRoute('form/google-map');
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
