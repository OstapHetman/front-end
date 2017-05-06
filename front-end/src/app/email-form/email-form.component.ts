import { Component, OnInit } from '@angular/core';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdRadioModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent  {
  public selectedValue: string;

  public langs = [
    { viewValue: 'English'},
    { viewValue: 'Ukrainian'}
  ];
}
