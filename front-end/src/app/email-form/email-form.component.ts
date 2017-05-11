import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
    public selectedValue: string;
    public langs;
    public form: FormGroup;
    constructor(private fb: FormBuilder) {}
    public ngOnInit() {
    this.langs =  [
       { value: 'eng', viewValue: 'English'},
       { value: 'ukr', viewValue: 'Ukrainian'}
    ];
    this.form = this.fb.group({
    name: ['', Validators.pattern('[a-zA-Z-0-9- ]+')],
    description: ['', Validators.pattern('[A-Z-0-9 .,!?:]+')]
    });
  }
}
