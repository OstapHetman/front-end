import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss'],
})
export class AdministrationComponent implements OnInit {
  constructor(public translate: TranslateService) {/*initial*/}
  public ngOnInit() {/*initial*/}
}
