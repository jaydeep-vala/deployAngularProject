import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, map, pluck, toArray } from 'rxjs/operators';
import { combineLatest, forkJoin, from, fromEvent, interval, pipe, Subscription} from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {

  dataArr = [
    {id:1,name:"jaydip",gender:'Male'},
    {id:2,name:"gopal",gender:'Male'},
    {id:3,name:"partner",gender:'Female'},
    {id:4,name:"manshi",gender:'Female'},
    {id:5,name:"ravi",gender:'Male'},
    {id:6,name:"vishal",gender:'Male'},
    {id:7,name:"vishva",gender:'Female'},
    {id:8,name:"manisha",gender:'Female'},
  ]
  constructor() { }

  @ViewChild('addbtn') addbtn?:ElementRef
  @ViewChild('name') name?:ElementRef
  @ViewChild('color') color?:ElementRef

  sub1?:Subscription;
  sub2?:Subscription;
  userData:any;
  filterData:any;
  filterGender:any;
  filterNumber:any;
  ngOnInit(): void {
    const broadcast = interval(1000);
    
    this.sub1=broadcast.pipe(map(res=>"mapData =>"+res)).subscribe(
        // console.log(data)
      )
      setTimeout(() => {
        this.sub1?.unsubscribe()
      }, 10000);

      const member = from([{id:1,name:'jaydip',job:{title:'full-stack devloper',experience:'12 year'}},
      {id:2,name:'gopal',job:{title:'html devloper',experience:'10 year'}},
      {id:3,name:'ravi',job:{title:'javascript devloper',experience:'9 year'}},
      {id:4,name:'viraj',job:{title:'java devloper',experience:'5 year'}},
      {id:5,name:'vishal',job:{title:'angular devloper',experience:'6 year'}},
      {id:6,name:'rutvik',job:{title:'typescript devloper',experience:'3 year'}},
      {id:7,name:'manoj',job:{title:'php devloper',experience:'6 year'}},
    ])

  // member.pipe(map(data=>data.name)).subscribe(res =>console.log(res))
  // when user want know only title in object
  member.pipe(pluck('job','title'),
    toArray()
  ).subscribe(res =>{
    console.log(res)
    this.userData = res
  })
  // filter By gender Ex-01
  const source = from(this.dataArr)
    source.pipe(
      filter(membr =>membr.name.length > 5),
      toArray()
      ).subscribe(res =>{
      console.log(res)
      this.filterData =res;
    })
    
  const source1 = from(this.dataArr)
    source.pipe(
      filter(membr=>membr.gender == 'Female'),
      toArray()
      ).subscribe(res =>{
      console.log(res)
      this.filterGender =res;
    })
  const source2 = from(this.dataArr)
    source.pipe(
      filter(membr=>membr.id  <= 6),
      toArray()
      ).subscribe(res =>{
      console.log(res)
      this.filterNumber =res;
    })
  }

  nameSource = ['jaydip','harley','gopal','ravi','bapu'];
  colorSource = ['red','blue','cyan','yellow','pink']
  ngAfterViewInit(){
    let count = 1
    fromEvent(this.addbtn?.nativeElement,'click').subscribe(res=>{
      let vidref='video '+count++
      console.log(vidref)
      this.appendVideo(vidref)
    })
    // fromEvent<any>(this.name?.nativeElement,'change').pipe(map(evet=>evet.target.value)).subscribe(res=>{
    //   console.log(res)
    // })
    const nameObs=fromEvent<any>(this.name?.nativeElement,"change").pipe(
      pluck('target','value')
    ).subscribe(res=>{
      console.log(res)
    })
    const colorObs=fromEvent<any>(this.color?.nativeElement,"change").pipe(
  
      pluck('target','value')
    ).subscribe(res=>{
      console.log(res)
    })

    
    
  }

  appendVideo(value:string){
    let createEl = document.createElement('li')
    createEl.innerHTML=value
    document.getElementById('elContainer')?.appendChild(createEl)
  }

  
}
