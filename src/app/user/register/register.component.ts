import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from "@angular/forms"
import { VServicesService } from 'src/app/v-services.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  constructor(private uservice:VServicesService) { }

  ngOnInit(): void {
  }
  adduser = new FormGroup({
    firstname:new FormControl(null),
    lastname:new FormControl(null),
    username:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null)
  }) 

  onSubmit(){
    this.uservice.saveuser(this.adduser).subscribe(result=>{
      console.log(result)
    })
    
  }
}
