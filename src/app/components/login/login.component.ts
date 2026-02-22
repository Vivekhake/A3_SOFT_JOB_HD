import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // ✅ ADD THIS
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    const data = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(data).subscribe({
      next: (token) => {
        this.authService.saveToken(token);
        alert('Login Successful');
      },
      error: () => {
        alert('Invalid Credentials');
      },
    });
  }

  // ✅ Google Login
  loginWithGoogle() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }

  // ✅ GitHub Login
  loginWithGithub() {
    window.location.href = 'http://localhost:8080/oauth2/authorization/github';
  }
}
