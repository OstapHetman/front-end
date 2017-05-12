import { Component, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';
import { EmailFormComponent } from './email-form/email-form.component';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public translate: TranslateService) {/*initial*/}

  public ngOnInit() {
        this.translate.addLangs(['en', 'ukr']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|ukr/) ? browserLang : 'en');
  }
}
