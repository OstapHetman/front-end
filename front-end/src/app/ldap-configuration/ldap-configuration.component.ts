import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'ldap-configuration',
  templateUrl: './ldap-configuration.component.html',
  styleUrls: ['./ldap-configuration.component.scss']
})
export class LdapConfigurationComponent implements OnInit {
    public show = false;
    public form: FormGroup;
    constructor(private fb: FormBuilder) {}
    public ngOnInit() {
    this.form = this.fb.group({
       ldap:
       ['', Validators.pattern('[a-zA-Z-0-9- ]+')],
       description:
       ['', Validators.pattern('\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}' +
       +'(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b')]});
  }
  public onSubmit() {
    /* Init */
  }
}
