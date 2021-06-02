import { Component, OnInit } from '@angular/core';
import { VServicesService } from 'src/app/v-services.service';
// import {ToastrService} from "ngx-toastr"
// import {FormControl,FormGroup} from "@angular/forms"
import {Router} from "@angular/router"
import { AuthGuard } from 'src/app/user/auth.guard';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email?:string ;
  password?:string;
  userData:any=[];
  constructor(private sevice:VServicesService,private router:Router,private authguad:AuthGuard) { }



  ngOnInit(): void {
   
  }



    
  //   this.sevice.adminList().subscribe(result=>{
  //     this.userData=result;
      
  //   for( let data of this.userData){
      
  //     if (this.email!=data.email ){
  //       alert("invalid email")
  //       break;
  //     }
  //     else if(this.password!==data.password){
  //       alert("invalid password")
  //       break;
  //     }
  //     else{

  //       alert("you are loggin...")
  //       this.router.navigate([`${pageName}`])
  //     }
     
  //   }
 
  //   console.log(this.email)
  //   console.log(this.password)
  // })
  
  onadd(saveAdmin:NgForm){
    this.sevice.loginAdminCheck(saveAdmin).subscribe((result:any)=>{
      this.userData=result;
      console.log(result)
      if(result.status==401){
        console.log("bad error")
        // this.toastr.error("401 ! Bad Error Occure")
      }
      else{
        // this.toastr.success("Login sucssss")
        this.router.navigate(['register/login/header'])
      }
      console.log(result.token)
      localStorage.setItem("token",result.token)
      
    console.log(this.email)
    console.log(this.password)
  })
}
  
    
  }
  

