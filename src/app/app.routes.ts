import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AdmissionsComponent } from './admissions/admissions.component';

export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'admissions', component: AdmissionsComponent },
];
