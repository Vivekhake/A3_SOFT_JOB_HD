import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  @Output() closeLogin = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
  ) {}

  login() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(data).subscribe({
      next: (res: any) => {
        // Save JWT Token
        this.authService.saveToken(res.token);

        // Call API to get user profile
        this.authService.getUserProfile().subscribe({
          next: (user: any) => {
            // Save user data
            localStorage.setItem('user', JSON.stringify(user));

            alert('Login Successful');

            // Close Modal
            this.closeModal();
          },
        });
      },

      error: () => {
        alert('Invalid Credentials');
      },
    });
  }

  loginWithGoogle() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }

  loginWithGithub() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github';
  }

  closeModal() {
    this.closeLogin.emit();
  }

  goToRegister(event: Event) {
    if(event) event.preventDefault();
    this.authService.openRegisterModal();
  }
}

