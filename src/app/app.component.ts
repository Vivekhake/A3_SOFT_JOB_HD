import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, RegisterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'job_portl';
  showLogin = false;
  showRegister = false;

  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.authService.showLoginModal$.subscribe(val => this.showLogin = val);
    this.authService.showRegisterModal$.subscribe(val => this.showRegister = val);
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.authService.isLoggedIn()) {
        this.authService.openLoginModal();
      }
    }
  }

  closeLogin() {
    this.authService.closeLoginModal();
  }

  closeRegister() {
    this.authService.closeRegisterModal();
  }
}
