import { Component, OnInit, ViewChild } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @ViewChild(UserLoginComponent) UL:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    console.log(this.UL.message)
  }
}
