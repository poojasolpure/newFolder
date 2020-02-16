import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageComponentComponent } from './heritage-component.component';

describe('HeritageComponentComponent', () => {
  let component: HeritageComponentComponent;
  let fixture: ComponentFixture<HeritageComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeritageComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
