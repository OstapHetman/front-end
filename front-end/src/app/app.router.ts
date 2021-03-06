import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { AdministrationComponent } from './administration/administration.component';
import { TimeSettingComponent } from './time-setting/time-setting.component';
import { LanguageComponent } from './language/language.component';
export const router: Routes = [
    { path: '', redirectTo: 'configuration', pathMatch: 'full' },
    { path: 'configuration',  component: ConfigurationComponent },
    { path: 'administration',  component: AdministrationComponent },
    { path: 'time-setting',  component: TimeSettingComponent },
    { path: 'language',  component: LanguageComponent }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
