import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementcomponentComponent } from './advertisementcomponent.component';

describe('AdvertisementcomponentComponent', () => {
  let component: AdvertisementcomponentComponent;
  let fixture: ComponentFixture<AdvertisementcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
