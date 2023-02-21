import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/firebase/auth.service';
import { StorageService } from "../../../../../shared/services/storage.service";
import { CommonService } from "../../../../../shared/services/common.service";
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from "@angular/common";


@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  date;
  currentDate;
  constructor(
    public authService: AuthService,
    private storageService: StorageService,
    public toster: ToastrService,
    public commonService: CommonService,
    public datepipe: DatePipe,
  ) {}
  ngOnInit() {
  }
  ngAfterViewInit(){
    let isLoggedIn = this.storageService.getCookie("isLoggedIn");
    let userData = localStorage.getItem("user");
    this.commonService.LoggedIn = isLoggedIn;
    this.commonService.userData = JSON.parse(userData);
  }
  logout(){
    this.commonService.LoggedIn = false;
    this.commonService.userData = null;
    this.toster.success("Logged out successfully", '', {
      tapToDismiss: true,
      closeButton: true,
      disableTimeOut: true
    });
    this.storageService.deleteCookie("isLoggedIn");
    localStorage.removeItem("user");
    this.commonService.handleRoute("authentication/login/simple");
  }
}
