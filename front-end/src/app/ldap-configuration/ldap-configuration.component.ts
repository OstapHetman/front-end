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
  styleUrls: ['./ldap-configuration.component.css']
})
export class LdapConfigurationComponent implements OnInit {

    public form: FormGroup;
    constructor(private fb: FormBuilder) {}
    public ngOnInit() {
    this.form = this.fb.group({
       ldap: ['', Validators.pattern('[a-zA-Z-0-9- ]+')]
    });
  }
}
