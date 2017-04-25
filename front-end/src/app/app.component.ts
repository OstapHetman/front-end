import { Component, ViewChild } from '@angular/core';
import { TranslateService } from 'ng2-translate';
//import {TranslateService} from '@ngx-translate/core';
import {Subscription } from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import {OnInit, OnDestroy} from '@angular/core';
import {Popup} from 'ng2-opd-popup';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

@ViewChild('popup1') popup1: Popup;



  param = {value: 'world'};

  private subscription: Subscription;

  constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute) {
        translate.addLangs(["en", "fr", "cn", "hi"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|cn|hi/) ? browserLang : 'en');
    }

ClickButton(){
  this.popup1.options = {
    header: "Your custom header",
    color: "#5cb85c", // red, blue.... 
    widthProsentage: 40, // The with of the popou measured by browser width 
    animationDuration: 1, // in seconds, 0 = no animation 
    showButtons: true, // You can hide this in case you want to use custom buttons 
    confirmBtnContent: "OK", // The text on your confirm button 
    cancleBtnContent: "Cancel", // the text on your cancel button 
    confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
    cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
    animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
};
    this.popup1.show(this.popup1.options);
  }

    changeLanguage(lang){
        this.translate.use(lang);
    }

    ngOnInit() {
    // subscribe to router event
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        let locale = param['locale'];
        if (locale !== undefined){
            this.translate.use(locale);
        }
      });
  }

  ngOnDestroy() {
    // prevent memory leak by unsubscribing
    this.subscription.unsubscribe();
  }

}