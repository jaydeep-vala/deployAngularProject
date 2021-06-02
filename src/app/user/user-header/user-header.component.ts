import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VServicesService } from 'src/app/v-services.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  userName :any='';
  exclusive:boolean=false
  constructor(private vservice:VServicesService) { }

  
 
  ngOnInit(): void {
    this.vservice.receivedMessage().subscribe(res=>{
      this.userName = res
    })
    this.userName = localStorage.getItem('username')
    this.vservice.exclusive.subscribe(res=>{
      this.exclusive = res
    })
  }
  submit(message:string){
    this.vservice.sendUsername(message);
    localStorage.setItem('username',message)
  }

  clearing(){
    this.vservice.clearing()
  }
}
