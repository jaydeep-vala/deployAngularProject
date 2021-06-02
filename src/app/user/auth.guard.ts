import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanDeactivate, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { VServicesService } from '../v-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private vservice:VServicesService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       
    // let IsLoggedin = this.vservice.isAuthentication();
    if(localStorage.getItem("token")){
      return true ;  
    }
    else{
      return false
    }
    // return IsLoggedin;

  //   if (!this.vservice.LoginStatus) {
  //     this.router.navigate(['admin/register/login']);
  //   }

  //   return this.vservice.LoginStatus;
  // }
 
  }


  
}

