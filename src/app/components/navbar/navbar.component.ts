import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  firstName: string = '';
  profileUrl: string = '';
  showDropdown: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.route.queryParams.subscribe((params) => {
        const token = params['token'];

        // ✅ OAuth token received
        if (token) {
          console.log('TOKEN RECEIVED:', token);

          // Save token correctly
          this.authService.saveToken(token);

          // remove token from URL
          this.router.navigate([], {
            queryParams: {},
            replaceUrl: true,
          });
        }

        this.checkLoginStatus();
      });
    }
  }

  checkLoginStatus() {
    const token = this.authService.getToken();

    if (token) {
      this.isLoggedIn = true;

      // Try OAuth profile first
      this.authService.getUserProfile().subscribe({
        next: (user: any) => {
          this.firstName = user.first_name;
          this.profileUrl = user.profile_url;
        },

        error: () => {
          // fallback for normal login
          this.authService.getProfile().subscribe({
            next: (user: any) => {
              this.firstName = user.first_name;
              this.profileUrl = user.profile_url;
            },

            error: () => {
              this.logout();
            },
          });
        },
      });
    } else {
      this.isLoggedIn = false;
    }
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  openLogin() {
    this.authService.openLoginModal();
  }

  openRegister() {
    this.authService.openRegisterModal();
  }
}
