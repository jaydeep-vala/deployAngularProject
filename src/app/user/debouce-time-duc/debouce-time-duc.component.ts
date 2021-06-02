import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { VServicesService } from 'src/app/v-services.service';

@Component({
  selector: 'app-debouce-time-duc',
  templateUrl: './debouce-time-duc.component.html',
  styleUrls: ['./debouce-time-duc.component.css']
})
export class DebouceTimeDUCComponent implements OnInit,AfterViewInit,OnDestroy{

  @ViewChild("myInput") myInput?:ElementRef
  @ViewChild("myInput1") myInput1?:ElementRef
  constructor(private loadingBar:LoadingBarService,private vservice:VServicesService) { }
  fatchedWord:null;
  fatchedWord1:null;
  ngOnInit(): void {
    this.vservice.exclusive.next(true)
  }

  ngAfterViewInit(){
    // Ex - 01 debounceTime
    const searchTearm= fromEvent<any>(this.myInput?.nativeElement,'keyup').pipe(map(data=>
      data.target.value),
      debounceTime(1000)
      )
    searchTearm.subscribe(res =>{
      console.log(res)
      this.fatchedWord = res
      this.loadingBar.start();
      setTimeout(() => {
        this.fatchedWord = null  
        this.loadingBar.stop();      
      }, 2000);
    })



    // Ex - 02 distinctUntillTime
    const searchTearm1= fromEvent<any>(this.myInput1?.nativeElement,'keyup').pipe(map(data=>
      data.target.value),
      debounceTime(1000),
      distinctUntilChanged()
      )
    searchTearm1.subscribe(res =>{
      console.log(res)
      this.fatchedWord1 = res
      this.loadingBar.start();
      setTimeout(() => {
        this.fatchedWord1 = null  
        this.loadingBar.stop();
      }, 2000);
    })
  }

  ngOnDestroy(){
    this.vservice.exclusive.next(false)
  }
}