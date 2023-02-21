import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { StorageService } from "../services/storage.service";

@Injectable()
export class CommonService {
    public loginStatus : any =0 ;
    LoggedIn : any;
    userData: any;
    toastMessage = new Subject<any>();
    isShowLoader = false;
    constructor(
        private router: Router,
        private storageService: StorageService,
    ) {
    }
    handleRoute(url:any,event?:any){
        this.router.navigate([url]);
    }
    setToastMessage(message:any){
        this.toastMessage.next(message);
    }
    getToastMessage(): Observable<any> {
        return this.toastMessage.asObservable();
    }
  
    setLoginStatus(status: number) {
        this.loginStatus = status;
    }
    logout(){
        this.setLoginStatus(0);
        this.storageService.deleteAllCookies();
        this.storageService.deleteCookie('isLoggedIn');
        this.storageService.deleteCookie('userId');
        this.storageService.deleteCookie('userName');
        this.storageService.deleteCookie('userRole');
        this.storageService.deleteCookie('userRoleId');
        this.isShowLoader = false;
        this.handleRoute('/');
    }
    loadScript(url: any = null, innerHtml: any = null, element: any = 'script') {
        return new Promise(resolve => {
            let body = <HTMLDivElement>document.body;
            let script = document.createElement(element);
            if (innerHtml != null) {
                script.innerHTML = innerHtml;
            }
            if (url != null) {
                script.src = url;
            }
            script.async = true;
            // script.defer = true;
            body.appendChild(script);
            resolve(true);
        })
    }
}