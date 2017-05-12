import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})

export class LanguageComponent implements OnInit {
  constructor(public translate: TranslateService) { /* Initial*/ }
  public ngOnInit() {
    /* Initial*/
  }
}
