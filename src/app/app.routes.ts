import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OAuthSuccessComponent } from './components/oauth-success/oauth-success.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // use literal 'full'
  { path: 'home', component: HomeComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'oauth-success', component: OAuthSuccessComponent },
];
