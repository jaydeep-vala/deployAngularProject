import { Component, OnInit } from '@angular/core';
import { VServicesService } from 'src/app/v-services.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor( private service:VServicesService) { }
  collection:any=[]
  ngOnInit(): void {
    this.service.adminList().subscribe(result=>{
      this.collection = result
    })
  }


}
