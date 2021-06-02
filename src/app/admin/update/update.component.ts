import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { VServicesService } from 'src/app/v-services.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router:ActivatedRoute,private eservice:VServicesService,private routerf:Router) { }
  editdata =new FormGroup({
    firstname:new FormControl(null),
    lastname:new FormControl(null),
    username:new FormControl(null),
    email:new FormControl(null),
    password:new FormControl(null)
  }) 
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id)
    this.eservice.editResto12(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result)
      this.editdata = new FormGroup({  
        firstname:new FormControl(result["firstname"]),
        lastname:new FormControl(result["lastname"]),
        username:new FormControl(result["username"]),
        email:new FormControl(result["email"]),
        password:new FormControl(result['password'])
      }) 
    })
  }

  oneEdit(pageName:string){
    console.log("item",this.editdata.value)
    this.eservice.updateResto(this.router.snapshot.params.id,this.editdata.value).subscribe((result:any)=>{
      console.log("result",result)
      console.log(result.status)
      window.location.reload();
    })
    this.routerf.navigate([`${pageName}`])
  }
}
