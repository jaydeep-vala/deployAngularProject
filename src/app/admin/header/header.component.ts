import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VServicesService } from 'src/app/v-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:VServicesService,private activator:ActivatedRoute) { }

  collection:any=[]
  ngOnInit(): void {
  
    
  }

  clearing(){
    localStorage.removeItem('token')
  }
 
}
