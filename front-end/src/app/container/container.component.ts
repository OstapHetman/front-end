import { Component, OnInit, ViewChild } from '@angular/core';
import { Popup } from 'ng2-opd-popup';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IMyOptions } from 'mydatepicker';
import * as $ from 'jquery';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})

export class ContainerComponent implements OnInit {
public name: any;
public description: any;
public myDatePickerOptions: IMyOptions = {
// other options
        dateFormat: 'dd.mm.yyyy',
    };
public model: Object = { date: { year: 2018, month: 10, day: 9 }};
@ViewChild('popup1') public popup1: Popup;
@ViewChild('popup2') public popup2: Popup;
public registerForm: FormGroup;
public form: FormGroup;
constructor(public fb: FormBuilder) {}

// VALIDATION
public ngOnInit() {
  this.form = this.fb.group({
   name: ['', Validators.pattern('[a-zA-Z-0-9- ]+')],
   description: ['', Validators.pattern('[A-Z-0-9 .,!?:]+')],
   ldap: ['', Validators.pattern('[a-zA-Z-0-9- ]+')],
   host: ['', Validators.pattern('[0-9][0-9][0-9].[0-9][0-9][0-9].[0-9][0-9][0-9]')],
   data: ['', Validators.minLength(1)]
    });
  }

}
