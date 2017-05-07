import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
// import { TranslateModule, MissingTranslationHandler } from 'ng2-translate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { MaterialModule } from '@angular/material';
// import {TranslateModule} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MyDatePickerModule } from 'mydatepicker';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AdministrationComponent } from './administration/administration.component';
// import { MyMissingTranslationHandler } from './missingtemplate.component';
import { UsernameComponent } from './username/username.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LangboxComponent } from './langbox/langbox.component';
import { ContainerComponent } from './container/container.component';
import { TimeSettingComponent } from './time-setting/time-setting.component';
import 'jquery/dist/jquery.min.js';
import { EmailFormComponent } from './email-form/email-form.component';
import { LdapConfigurationComponent } from './ldap-configuration/ldap-configuration.component';
// import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css';
// import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
// import 'bootstrap-timepicker/css/bootstrap-timepicker.min.css';
// import 'bootstrap-timepicker/js/bootstrap-timepicker.js';

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
      TimeSettingComponent,
      EmailFormComponent,
      LdapConfigurationComponent
  ],
  imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      HttpModule,
      RouterModule,
      routes,
      BrowserAnimationsModule,
      MaterialModule.forRoot(),
    // TranslateModule.forRoot(),
      BsDropdownModule.forRoot(),
      MyDatePickerModule
  ],
  exports: [
       // TranslateModule
    ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export  class AppModule { }
