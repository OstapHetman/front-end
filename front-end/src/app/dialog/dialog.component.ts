import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MdIconModule } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(public dialog: MdDialog) {}
 public openDialog() {
    this.dialog.open(DialogComponent);
  }
 public ngOnInit() { /** Init */ }
}
