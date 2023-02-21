import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { StorageService } from "./storage.service";
import { CommonService } from "./common.service";
import { Subject } from 'rxjs/internal/Subject';
@Injectable()
export class HttpService {
    baseUrl = environment.api_base_url;
    isProduction = environment.production;
    httpErrorSubject = new Subject<any>();
    isInitCalling: boolean;
    constructor(
        private http: HttpClient,
        private storageService: StorageService,
        private commonService: CommonService
    ) {
    }
    delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async getFromApi(url:any, headersObj?: any, skipHandleErr?: boolean) {
        // url should start with /
        if(this.isInitCalling){
            await this.delay(1000);
        }
        if(!this.isProduction){
            url = this.baseUrl+url;
        }
        let headers = this.storageService.getRequestHeaders();
        if (headersObj != null) {
            for (var key in headersObj) {
                headers = headers.set(key, headersObj[key]);
            }
            return this.http.get(url, { headers })
                .toPromise()
                .then(response => response)
                .catch(err => skipHandleErr ? console.log(err) : this.handleErrors(err));
        } else {
            return this.http.get(url, { headers })
                .toPromise()
                .then(response => response)
                .catch(err => skipHandleErr ? console.log(err) : this.handleErrors(err));
        }
    }
    postToAPI(url: string, paramsObj: any, headersObj?: any, mapped?: any, setHeader?: boolean, skipHandleErr?: boolean) {
        // var paramsStr = this.jsonToQueryString(paramsObj);
        if (!this.isProduction) {
            url = this.baseUrl + url;
        }
        let paramsStr = paramsObj;
        let resp: any;
        if (mapped == null) { mapped = true; }
        let headers = this.storageService.getRequestHeaders();
        if (headersObj != null) {
            for (var key in headersObj) {
                headers = headers.set(key, headersObj[key]);
            }
        }
        return this.http.post(url, paramsStr, { headers })
            .toPromise()
            .then(response => response)
            .catch(err => skipHandleErr ? console.log(err) : this.handleErrors(err));
    }
    postToAPI2(url: string, paramsObj: any, headersObj?: any, mapped?: any, setHeader?: boolean, skipHandleErr?: boolean) {
        
        console.log("baseUrl"+ this.baseUrl);
        console.log("url before merge" + url);
        url = this.baseUrl + url;
        
        console.log("url after merge"+url);
        var paramsStr = this.jsonToQueryString(paramsObj);
        let headers = this.storageService.getRequestHeaders();
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        let resp: any;
        if (mapped == null) { mapped = true; }
        if (headersObj != null) {
            for (var key in headersObj) {
                headers = headers.set(key, headersObj[key]);
            }
        }
        return this.http.post(url, paramsStr, { headers })
            .toPromise()
            .then(response => response)
            .catch(err => skipHandleErr ? console.log(err) : this.handleErrors(err));
    }
    jsonToQueryString(json:any) {
        return Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
        }).join('&');
    }
    handleErrors(error: any): Promise<any> {
        if (error.status == 401 && error['error'] && error['error']['action'] && error['error']['action'] == 'update') {
            // this.updateToken();
            this.setHttpError('401');
        } else if (error.status == 401) {
            this.setHttpError('401');
        }
        // console.log(error);
        if (error && error.error && error.error.message) {
            this.showErrorMsg(error.error.message)
        }
        return Promise.reject((error.error) || error);
    }
    showErrorMsg(msg: any) {
        if (msg != null) {
            this.httpErrorSubject.next({ msg: msg, statusCode: 400 });
            // this.showErrorPopup = true;
            // this.errorMsg = msg;
        }
    }
    setHttpError(value:any) {
        this.httpErrorSubject.next(value);
    }
}