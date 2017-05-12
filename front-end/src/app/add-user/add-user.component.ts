import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    public selectedValue: string;
    public show = false;
    public langs;
    public form: FormGroup;
    public FormBuilder = new InjectionToken<FormBuilder>('app.config');
    constructor(@Inject(FormBuilder)private fb: FormBuilder) {}
    public ngOnInit() {
    this.langs =  [{
      value: 'admin',
      viewValue: 'Administration'
    },
    {
      value: 'user',
      viewValue: 'User'
    },
    {
      value: 'guest',
      viewValue: 'Guest'
    }
    ];
    this.form = this.fb.group({
    name: ['', Validators.pattern('[a-zA-Z-0-9- ]+')]
    });
  }
  public onSubmit() {
    /* Init */
  }
}
