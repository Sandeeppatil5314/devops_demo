import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/firebase/auth.service';
import { StorageService } from "../../shared/services/storage.service";
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(
    public authService: AuthService,
    private storageService: StorageService,
    public router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    let user = JSON.parse(localStorage.getItem('user'));
    let isLoggedIn = this.storageService.getCookie('isLoggedIn');
    if ((!user || user === null) || !isLoggedIn) {
      this.router.navigate(['/authentication/login/simple']);
      return true
    }
    else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(['/authentication/login/simple']);
        return true
      }
    }
    return true
  }
  
}
