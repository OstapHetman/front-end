import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MdDialog) { }
 openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
  ngOnInit() {
  }

}
export class DialogOverviewExampleDialog {}