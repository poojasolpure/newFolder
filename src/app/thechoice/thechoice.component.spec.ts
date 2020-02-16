import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { THECHOICEComponent } from './thechoice.component';

describe('THECHOICEComponent', () => {
  let component: THECHOICEComponent;
  let fixture: ComponentFixture<THECHOICEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ THECHOICEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(THECHOICEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
