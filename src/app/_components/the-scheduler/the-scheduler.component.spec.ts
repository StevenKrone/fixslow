import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheSchedulerComponent } from './the-scheduler.component';

describe('TheSchedulerComponent', () => {
  let component: TheSchedulerComponent;
  let fixture: ComponentFixture<TheSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
