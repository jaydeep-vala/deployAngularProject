import { Component, OnInit } from '@angular/core';
import { VServicesService } from 'src/app/v-services.service';
import {FormControl,FormGroup, Validators} from "@angular/forms"
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  isSuccessful = false;
  isSignUpFailed = false;
  constructor(private uservice:VServicesService) { }
  userData:any=[];
  ngOnInit(): void {
    
    
  }
  adduser = new FormGroup({
    firstname:new FormControl(null,Validators.required),
    lastname:new FormControl(null,Validators.required),
    username:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,Validators.required)
  }) 


  onSubmit(message:string){
    this.uservice.sendUsername(message)
    localStorage.setItem('username',message)
    // if(this.userData.email != this.adduser.value.email){
      this.uservice.loginUserData().subscribe(result=>{
        this.userData=result;
        // console.log(this.userData)
        // console.log(this.userData[0].email);
      // for( let data of this.userData){
      //   if (this.adduser.value.email===data.email){
      //     alert("you are already register...")
      //     this.isSuccessful=false
      //     break;
      //   }
      //   else{
      //     this.isSuccessful=true
      //   }
      // }
      })
      // if(this.isSuccessful){
        this.uservice.saveuser(this.adduser.value).subscribe((result:any)=>{
          if(result.status=="400"){
            Swal.fire({
              title: 'record Exist',
              text: 'You will not be able to recover this imaginary file!',
              icon: 'error',
              // showCancelButton: true,
              confirmButtonText: 'Yes, ',
              cancelButtonText: 'No, keep it'
            }).then((result) => {
              if (result.value) {
               
              // For more information about handling dismissals please visit
              // https://sweetalert2.github.io/#handling-dismissals
              } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(  
                  'Cancelled',
                  'Your imaginary file is safe :)',
                  'error'
                )
              }
            })
          }else{
            Swal.fire({
          title: 'Register SuccessFully',
          text: 'You will not be able to recover this imaginary file!',
          icon: 'success',
          // showCancelButton: true,
          confirmButtonText: 'Yes, ',
          cancelButtonText: 'No, keep it'
        }).then((result) => {
          if (result.value) {
           
          // For more information about handling dismissals please visit
          // https://sweetalert2.github.io/#handling-dismissals
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(  
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
            )
          }
        })
          }
  })

}
}