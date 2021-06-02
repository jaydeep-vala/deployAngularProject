import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VServicesService } from 'src/app/v-services.service';
import * as $ from 'jquery'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit,AfterViewInit {

  constructor(private service:VServicesService,private router:ActivatedRoute) { }
  collection:any=[]

  s1:any;
  s2:any;
  ngOnInit(): void {
    this.service.loginUserData().subscribe(result=>{
 
      this.collection = result
      // this.s1= localStorage.getItem('token');
      //  this.s2=JSON.parse(this.s1);
      // console.log(this.s2)
    })
  }
  ngAfterViewInit(){
    $(window).on('load',function(){
      $('.loader-wrapper').fadeOut('slow');
    });
  }

}
