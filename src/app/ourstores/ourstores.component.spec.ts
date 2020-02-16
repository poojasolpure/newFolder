import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurstoresComponent } from './ourstores.component';

describe('OurstoresComponent', () => {
  let component: OurstoresComponent;
  let fixture: ComponentFixture<OurstoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurstoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurstoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
