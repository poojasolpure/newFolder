import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastercompComponent } from './mastercomp.component';

describe('MastercompComponent', () => {
  let component: MastercompComponent;
  let fixture: ComponentFixture<MastercompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastercompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
