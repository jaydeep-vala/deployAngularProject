import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatherWidgetMainComponent } from './wheather-widget-main.component';

describe('WheatherWidgetMainComponent', () => {
  let component: WheatherWidgetMainComponent;
  let fixture: ComponentFixture<WheatherWidgetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatherWidgetMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatherWidgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
