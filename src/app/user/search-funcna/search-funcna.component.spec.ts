import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFuncnaComponent } from './search-funcna.component';

describe('SearchFuncnaComponent', () => {
  let component: SearchFuncnaComponent;
  let fixture: ComponentFixture<SearchFuncnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFuncnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFuncnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
