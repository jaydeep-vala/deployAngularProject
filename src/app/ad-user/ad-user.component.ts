import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-user',
  templateUrl: './ad-user.component.html',
  styleUrls: ['./ad-user.component.css']
})
export class AdUserComponent implements OnInit {

  constructor(private route:Router) { }

  // disabled :boolean=true
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.visible=false
    }
    
  }

  // onclick(){
  //   this.disabled=false
  //   this.disabled=false
  
  // }
  visible:boolean = true;
 showhideUtility(){
   

     this.visible = this.visible?false:false;

  //  this.buttonTitle = this.visible?"Hide":"Show";
 }
//  show:string="red"
//   w3_open() {
//     // document.getElementById("mySidebar").style.display = "block";
//     this.show = 'true'
//    }
//  w3_close() {
//   this.show = 'false'
// }


}
