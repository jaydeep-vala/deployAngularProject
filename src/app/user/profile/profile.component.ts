import { AfterViewInit, Component, OnInit ,ViewChild} from '@angular/core';
import { VServicesService } from 'src/app/v-services.service';
import {UserLoginComponent} from '../user-login/user-login.component'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

@ViewChild(UserLoginComponent) UL:any;
  userName: string | null | undefined;
  firstname:any;
  lastname:string | null | undefined;
  email:string | null | undefined;

  constructor( private vservice:VServicesService) { }
  s1:any
  collection:any=[]
 
  ngOnInit(): void {
    this.userName = localStorage.getItem('username')
    this.firstname = localStorage.getItem('firstname')
    this.lastname = localStorage.getItem('lastname')
    this.email = localStorage.getItem('email')
    this.vservice.loginUserData().subscribe(result=>{
      this.collection = result
      for(let i of this.collection){
        console.log(i.firstname)
      }    
    })
    this.s1 = localStorage.getItem('token')
    console.log("hellllllllll",this.s1)
  }

}
