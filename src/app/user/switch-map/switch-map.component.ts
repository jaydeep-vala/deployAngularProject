import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, switchAll, switchMap } from 'rxjs/operators';
import { VServicesService } from 'src/app/v-services.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  constructor(private vservice:VServicesService) { }

  getData(data:any){
    return of(data + ' Video Uploaded').pipe(delay(1000))
  }
  
  ngOnInit(): void {
    const source = from(['Tech','Comdy','News'])
    const source1 = from(['Tech','Comdy','News'])
  
    // Ex 01 Using Map in this Map we Need subcribe 2 time beacuse it obervable return observable
    source.pipe(
      map(res=>this.getData(res))
    ).subscribe(res=>{
      res.subscribe(res2=>{
        console.log(res2)
        this.vservice.appendEle(res2,'elContainer')
      })
    })
  // Ex 02 Using Map + switchAll 
    source1.pipe(
      concatMap(res=>this.getData(res)),
      // switchAll()
    ).subscribe(res=>{
        console.log(res)
        this.vservice.appendEle(res,'elContainer1')
      
    })
  // Ex 03 Using Map + switchAll 
    source1.pipe(
      switchMap(res=>this.getData(res))
    ).subscribe(res=>{
        console.log(res)
        this.vservice.appendEle(res,'elContainer2')
      
    })
    

  }

}
function subscribe(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}

