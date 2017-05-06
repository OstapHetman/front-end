import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LdapConfigurationComponent } from './ldap-configuration.component';

describe('LdapConfigurationComponent', () => {
  let component: LdapConfigurationComponent;
  let fixture: ComponentFixture<LdapConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LdapConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LdapConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
