import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  constructor(public dialog: MdDialog) {}
 public openDialog() {
    // this.dialog.open(DialogOverviewExampleDialog);
  }
 public ngOnInit() { /** Init */ }
}
// export class DialogOverviewExampleDialog {}
