import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicianApplicationComponent } from './technician-application.component';

describe('TechnicianApplicationComponent', () => {
  let component: TechnicianApplicationComponent;
  let fixture: ComponentFixture<TechnicianApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicianApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicianApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
