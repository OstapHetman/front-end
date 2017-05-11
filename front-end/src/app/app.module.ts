// MODULE
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MyDatePickerModule } from 'mydatepicker';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
// ROUTE
import { routes } from './app.router';
// COMPONENT
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { UsernameComponent } from './username/username.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LanguageComponent } from './language/language.component';
import { LangboxComponent } from './langbox/langbox.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AdministrationComponent } from './administration/administration.component';
import { ContainerComponent } from './container/container.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { LdapConfigurationComponent } from './ldap-configuration/ldap-configuration.component';
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
      TimeSettingComponent,
      EmailFormComponent,
      LdapConfigurationComponent,
      LanguageComponent
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
      MyDatePickerModule,
      NgxErrorsModule
  ],
  exports: [
       // TranslateModule
    ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export  class AppModule { }
