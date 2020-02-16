import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTestRideComponentComponent } from './book-test-ride-component.component';

describe('BookTestRideComponentComponent', () => {
  let component: BookTestRideComponentComponent;
  let fixture: ComponentFixture<BookTestRideComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTestRideComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTestRideComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
