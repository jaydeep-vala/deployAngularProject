import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VServicesService } from 'src/app/v-services.service';
import { AuthGuard } from '../auth.guard';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email?:string ;
  password?:string;
  userData: any=[];
  id:any;

  message="hello jd banna"
  constructor(private sevice:VServicesService,private router:Router,private authguad:AuthGuard) { }



  ngOnInit(): void {
   if(localStorage.getItem('token')){
    
   }
  }
  onadd(saveUser:NgForm){
    this.sevice.loginUserCheck(saveUser).subscribe((result:any)=>{
      this.userData=result;
      console.log(result)
      if(result.status==401){
        console.log("bad error")
      }
      else{
        this.router.navigate(['register/login/uheader'])
      }
      console.log(result.token)
      localStorage.setItem("token",result.token)
      // console.log(result.user.firstname)
      localStorage.setItem("username",result.user.username)
      localStorage.setItem("firstname",result.user.firstname)
      localStorage.setItem("lastname",result.user.lastname)
      localStorage.setItem("email",result.user.email)
      
      // setTimeout(() => {
      //   this.sevice.clearing()
      //   this.router.navigate(['register/login'])
      // }, 3000);
      
      // for( let data of this.userData){
      
    //   if (this.email!=data.email ){
    //     alert("invalid email")  
    //     break;
    //   }
    //   else if(this.password!==data.password){
    //     alert("invalid password")
    //     break;
    //   }
    //   else{
    //     this.id=data.id
    //     alert("you are loggin...")
        // this.router.navigate([`${pageName}`])
    //   }
    //   console.log(this.id)
    // }
    // // if(this.email=="admin@12gmail.com" && this.password=="admin"){
    //   this.router.navigate([`${pageName}`])
    // }
    // else{
    //   alert("username and password wrong")
    // }
    
    console.log(this.email)
    console.log(this.password)
  })

  
}
  

}
