import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSettingComponent } from './time-setting.component';

describe('TimeSettingComponent', () => {
  let component: TimeSettingComponent;
  let fixture: ComponentFixture<TimeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
