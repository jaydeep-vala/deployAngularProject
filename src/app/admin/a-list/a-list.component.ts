import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { fromEvent } from 'rxjs';
import { VServicesService } from 'src/app/v-services.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-a-list',
  templateUrl: './a-list.component.html',
  styleUrls: ['./a-list.component.css']
})
export class AListComponent implements OnInit,AfterViewInit {

  constructor(private service:VServicesService,private activator:ActivatedRoute,private modalService: NgbModal){}
  @ViewChild("openBtn") openBtn?:ElementRef
  firstname:any;
  collection:any=[]
  page:number=1;
  ngOnInit(): void {
    this.service.loginUserData().subscribe(result=>{
      this.collection = result
      console.log(this.collection)
      console.log(result)
    })
    
  }
  show:boolean = false
  ngAfterViewInit(){
   
  }
  onDelete(item:number,event:any){
    event.preventDefault();
    
      Swal.fire({
        title: 'Are you sure want Delete Record?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.collection.splice(item-1,1)
          this.service.deleteData(item).subscribe(result=>{
            this.collection = result
          })
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(  
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
  }
  Search(){
    if(this.firstname == ""){
      this.ngOnInit();
    }else{
      this.collection = this.collection.filter((res:any)=>{
        return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase())
      })
    }
  }
  key:string = 'id';
  reverse:boolean=false;
  sort(key:any){
    this.key = key
    this.reverse =! this.reverse
  }

  closeResult = '';
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
