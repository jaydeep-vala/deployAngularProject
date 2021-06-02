import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { user_admin_inter } from './U-A-detail';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class VServicesService {
  exclusive = new Subject<boolean>()
  constructor(private http:HttpClient) { }

  url="http://localhost:8000/user";
  url2="http://localhost:8000/admin";

  
  IsLoggedin = false;

// private loggedInStatus = JSON.parse(localStorage.getItem('token') || ('false'));

// setLoginStatus(value:any) {
//     this.loggedInStatus = value;
//     localStorage.setItem('token');
//   }
  // get LoginStatus() {
  //   return JSON.parse(localStorage.getItem('token') || 
  //   this.loggedInStatus.toString());
  // } 

  userName = new BehaviorSubject<string>('User')

  sendUsername(uname:string){
    this.userName.next(uname)
    
  }

  receivedMessage():Observable<string>{
    return this.userName.asObservable();
  }

  saveData(data:any){
      return this.http.post<user_admin_inter>("http://localhost:8000/admin",data,httpOptions)
  }
  // loginData(){
  //   return this.http.get(this.url)
  // }
  adminList(){

    return this.http.get<user_admin_inter>(this.url2)
  }
  deleteData(id:number){
    return this.http.delete(`${this.url}/${id}`)
  } 
  deleteAdmin(id:number){
    return this.http.delete(`${this.url2}/${id}`)
  } 
  editResto12(id:number){
    return this.http.get<user_admin_inter>(`${this.url}/${id}`)
  }
  updateResto(id:number,data:string|number){
    return this.http.put<user_admin_inter>(`${this.url}/${id}`,data)
  }
  // editAdmin(id:number){
  //   return this.http.get(`${this.url2}/${id}`)
  // }
  updateAdmin(id:number,data:string|number){
    return this.http.put<user_admin_inter>(`${this.url2}/${id}`,data)
  }
  saveuser(data1:any){
    return this.http.post<user_admin_inter>(this.url,data1,httpOptions)
  }
  loginUserData(){

    return this.http.get<user_admin_inter>("http://localhost:8000/user")
  }
  loginUserCheck(data1:any){
    this.IsLoggedin = true
    return this.http.post<user_admin_inter>("http://localhost:8000/user/register/login",data1)
  }
  loginAdminCheck(data1:any){
    this.IsLoggedin = true
    return this.http.post<user_admin_inter>("http://localhost:8000/admin/register/login",data1,httpOptions)
  }

  loggedIn(){
    this.IsLoggedin = false
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem("token")
  }
  isAuthentication(){
    return this.IsLoggedin;
  }
  clearing(){
    localStorage.removeItem("token")
    localStorage.removeItem('username')
    localStorage.removeItem('firstname')
    localStorage.removeItem('lastname')
    localStorage.removeItem('email')
  }
  appendEle(val:any,containerId:any){
    let ele = document.createElement('li')
    ele.innerText=val
    document.getElementById(containerId)?.append(ele)
  }

}
