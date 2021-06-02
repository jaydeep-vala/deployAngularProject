import { Component, OnInit } from '@angular/core';
// import {ToastrService} from  "ngx-toastr"
import {FormControl,FormGroup} from "@angular/forms"
import { VServicesService } from 'src/app/v-services.service';
// import { from } from ';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private service:VServicesService ) { }

  ngOnInit(): void {
   
  }
  userData:any=[];
  addResto1 = new FormGroup({
    firstname:new FormControl(null),
    lastname:new FormControl(null),
    username:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null)
  }) 
  onSubmit(){

    this.service.adminList().subscribe(result=>{
      this.userData=result;
      console.log(this.addResto1.value)
      for( let data of this.userData){
        if (this.addResto1.value.email===data.email){
          alert("you are already register...")
          // this.toastr.success("register Sucessfully")
          break;
        }
        else{
          this.service.saveData(this.addResto1.value).subscribe((result:any)=>{
            console.log(result)
            // if(result.status== 400){

            //   this.toastr.success("register Sucessfully")
            // }
          })
        }
    
      }
    })
  }
}