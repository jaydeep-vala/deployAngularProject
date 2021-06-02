import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { Observable } from 'rxjs';
import {VServicesService} from "./v-services.service"
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector ,private authservice:VServicesService) { }
 
  // intercept(req: any,next: any){
  //   // let authService =this.injector.get(VServicesService)
  //   let tokenizedReq =req.clone({
  //     setHeader:{
  //       Authorization:`jwt ${this.authservice.getToken()}`
  //     }
  //   })
  //   return  next.handle(tokenizedReq)
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = this.injector.get(VServicesService);
    const tokenReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${auth.getToken()}`) });
    return next.handle(tokenReq);
  }
}
