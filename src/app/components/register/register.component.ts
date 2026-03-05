import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private authService: AuthService) {} // ✅ Injected

  user = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    profile_url: '',
  };

  confirmPassword: string = '';

  register(form: any) {
    if (form.invalid) {
      alert('Please fix validation errors');
      return;
    }

    if (this.user.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.user).subscribe({
      next: () => {
        alert('Registration successful');
        form.reset();
      },
      error: () => {
        alert('Registration failed');
      },
    });
  }
}
