import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  register() {
    const data = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.authService.register(data).subscribe({
      next: (res) => {
        alert(res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err.error);
      },
    });
  }
}
