import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { fromEvent } from 'rxjs';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, shareReplay, switchMap } from 'rxjs/operators';
import { Search } from 'src/app/search-Interface/search.interface';
import { SearchService } from 'src/app/search-service/search.service';

@Component({
  selector: 'app-search-funcna',
  templateUrl: './search-funcna.component.html',
  styleUrls: ['./search-funcna.component.css']
})
export class SearchFuncnaComponent implements AfterViewInit {

  @ViewChild("searchForm") searchForm?:NgForm
  searchResult?:any;
  searchResultCount:any;

  constructor(private searchService:SearchService,private loadingBar:LoadingBarService) { }


  ngAfterViewInit(): void {
    this.searchService.getSearches('angular').subscribe(res=>{
      console.log(res)
    })
    // fromEvent(this.searchForm?.valueChanges,)
    const formValue=this.searchForm?.valueChanges
    formValue?.pipe(
      // map(data=>data['searchTerm'])
     
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data=>{
        this.loadingBar.start();
        return this.searchService.getSearches(data);
      })
    ).subscribe(res=>{
      console.log(res)
      this.searchResult = res
      this.loadingBar.stop();
      this.searchResultCount = Object.keys(res).length
      console.log("count =>"+Object.keys(res).length)
    })
  }

}
