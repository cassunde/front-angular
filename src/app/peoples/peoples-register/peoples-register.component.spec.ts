import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesRegisterComponent } from './peoples-register.component';

describe('PeoplesRegisterComponent', () => {
  let component: PeoplesRegisterComponent;
  let fixture: ComponentFixture<PeoplesRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
