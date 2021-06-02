import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {

  constructor(private http:HttpClient) { }
person:any;
fatching:boolean = false;
status : string ="No Data"
  ngOnInit(): void {
    
  }
fetchUser(){
  this.fatching = true
  this.status = "Fatching Data..."
  this.http.get('http://localhost:3000/demo').pipe(
    // retry(4)
    retryWhen(err => err.pipe(
      delay(3000),
      scan((retrycount)=>{
        if(retrycount >= 4){
          throw err
        }else{
          retrycount = retrycount+1
          console.log("retryCount"+retrycount)
          this.status = "Retry Attempt #" + retrycount
          return retrycount
        }
      },0)
    ))
  ).subscribe((res)=>{
    console.log(res)
    this.person = res;
    this.fatching = false
    this.status="Data Fatched"
  },
  (err)=>{
    // console.err(err.error.error);
    console.error(err)
    this.fatching = false
    this.status = "Problem Fatching Data"
  })
}
  
}
