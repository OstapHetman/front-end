import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { MdCardModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  public rows = [];
  public selected = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  public fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  public onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  public onActivate(event) {
    console.log('Activate Event', event);
  }

  public add() {
    this.selected.push(this.rows[1], this.rows[3]);
  }

  public update() {
    this.selected = [ this.rows[1], this.rows[3] ];
  }

  public remove() {
    this.selected = [];
  }

  public ngOnInit() {/*initial*/}
}
