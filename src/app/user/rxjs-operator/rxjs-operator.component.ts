import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Subscription, timer } from 'rxjs';
import { map, take, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.css']
})
export class RxjsOperatorComponent implements OnInit {
  sub1 :Subscription | undefined;
  color1:any;
  myColor:string = '';
  constructor() { }
   color = ['Red','DarkGray','DarkGreen','DarkOrange','DarkOrchid','DarkSeaGreen','DimGrey','yellow','cyan']
   ngOnInit(): void {
    const source = interval(2000)

    this.sub1=source.pipe(
      tap(tapRes=>{
        this.myColor = this.color[tapRes]
        if(tapRes == 8){
          this.sub1?.unsubscribe()
        }
      }),
      map(data=>this.color[data])
      ).subscribe(res=>{
      // console.log(res)
      this.appendFunc(res,"elContainer")
    })
    
    // take operator
    // const source1 = interval(1000).pipe(
    //   take(5)
    // );

    // source1.subscribe(res =>{
    //   // console.log(res)
    // })

    // takeUntill operator

  const condition = fromEvent(document,'click')
 const source11 = interval(1000).pipe(
      takeUntil(condition)
    );

    source11.subscribe(res =>{
      console.log(res)
      this.appendFunc(res,'elContainer2')
    })

  }

  appendFunc(val:any,containerId:string){
    let createEle = document.createElement('li')
    createEle.innerHTML = val
    document.getElementById(containerId)?.append(createEle)
  }

}
