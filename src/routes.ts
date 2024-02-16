import { HomeComponent } from './app/home/home.component';
import { RegisterComponent } from './app/register/register.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
];
