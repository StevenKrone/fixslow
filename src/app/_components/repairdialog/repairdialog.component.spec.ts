import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairdialogComponent } from './repairdialog.component';

describe('RepairdialogComponent', () => {
  let component: RepairdialogComponent;
  let fixture: ComponentFixture<RepairdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
