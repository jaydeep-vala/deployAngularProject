import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AListComponent } from './a-list.component';

describe('AListComponent', () => {
  let component: AListComponent;
  let fixture: ComponentFixture<AListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
