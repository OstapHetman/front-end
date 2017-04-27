import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import { RouterModule } from '@angular/router';
import { TranslateModule, MissingTranslationHandler } from 'ng2-translate';
//import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {PopupModule} from 'ng2-opd-popup';

import { routes } from './app.router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AdministrationComponent } from './administration/administration.component';
import { MyMissingTranslationHandler } from './missingtemplate.component'
import { UsernameComponent } from './username/username.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LangboxComponent } from './langbox/langbox.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import 'bootstrap-timepicker/css/bootstrap-timepicker.min.css';
import 'bootstrap-timepicker/js/bootstrap-timepicker.js';
import { TimeSettingComponent } from './time-setting/time-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ConfigurationComponent,
    AdministrationComponent,
    UsernameComponent,
    DropdownComponent,
    LangboxComponent,
    ContainerComponent,
    TimeSettingComponent
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    routes,
    [BrowserAnimationsModule],
    TranslateModule.forRoot(),
    BsDropdownModule.forRoot(),
    PopupModule.forRoot(),
    NKDatetimeModule
   
  ],
  exports: [
        TranslateModule
    ],
  providers: [
      { provide: MissingTranslationHandler, useClass: MyMissingTranslationHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

