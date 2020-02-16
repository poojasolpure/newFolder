import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeaDealerComponent } from './becomea-dealer.component';

describe('BecomeaDealerComponent', () => {
  let component: BecomeaDealerComponent;
  let fixture: ComponentFixture<BecomeaDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecomeaDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomeaDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
