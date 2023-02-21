import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class StorageService {

    isStorageSupported() {
        var testKey = '_storage_test', storage = window.sessionStorage;
        try {
            storage.setItem(testKey, '1');
            storage.removeItem(testKey);
            return true;
        } catch (error) { return false; }
    }
    getFromStorage(k: any) {
        if (this.isStorageSupported() == true) {
            if (window.localStorage.getItem(k) === undefined) {
                return null;
            } else {
                return window.localStorage.getItem(k);
            }
        } else {
            if (typeof window['local'][k] !== undefined && window['local'][k] != null && window['local'][k] != undefined) {
                return window['local'][k];
            } else {
                return null;
            }
        }
    }
    setInStorage(k: any, v: any) {
        if (this.isStorageSupported() == true) {
            window.localStorage.setItem(k, v);
        } else {
            setTimeout(() => { window['local'][k] = v; }, 1);
        }
    }
    unsetFromStorage(k: any) {
        if (this.isStorageSupported() == true) {
            window.localStorage.removeItem(k);
        } else {
            setTimeout(() => { delete window['local'][k]; }, 1);
        }
    }
    emptyStorage() {
        if (this.isStorageSupported() == true) {
            window.localStorage.clear();
        } else {
            setTimeout(() => { window['local'] = {}; }, 1);
        }
    }
    getCookie(name:any): any {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    }
    setCookie(name:any, value:any, days?: any) {
      
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date;
        }
        else var expires = "";
        document.cookie = name + "=" + value + expires + ";path=/;";
        // document.cookie = name + "=" + value + expires;
    }
    deleteAllCookies() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++)
            this.deleteCookie(cookies[i].split("=")[0]);
    }
    deleteCookie(name) {
        this.setCookie(name, "", -1);
    }
    //get http request headers for httpService (Code written here to avoid cyclic dependency of commonService and httpService). This method is referenced in more than one places, each having its own error handling.
    getRequestHeaders() {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/x-www-form-urlencoded');
        // if(this.getCookie('token') != undefined)
        //     headers = headers.set('token', this.getCookie('token'));
        if (this.getCookie('userId') != undefined)
            headers = headers.set('auth_id', this.getCookie('userId'));
        if (this.getCookie('userRole') != undefined)
            headers = headers.set('role', this.getCookie('userRole'));
        return headers;
    }
    generateDeviceId(length: number = 18) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}