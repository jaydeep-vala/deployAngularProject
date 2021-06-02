import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouceTimeDUCComponent } from './debouce-time-duc.component';

describe('DebouceTimeDUCComponent', () => {
  let component: DebouceTimeDUCComponent;
  let fixture: ComponentFixture<DebouceTimeDUCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebouceTimeDUCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouceTimeDUCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
