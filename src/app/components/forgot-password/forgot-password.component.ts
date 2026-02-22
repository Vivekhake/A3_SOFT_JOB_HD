import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  email = '';
  otp = '';
  newPassword = '';
  step = 1;
  message = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  // ✅ Send OTP
  sendOtp() {
    this.authService.sendOtp(this.email).subscribe({
      next: (res: any) => {
        this.message = res.message || 'OTP sent!';
        this.step = 2;
      },
      error: (err) => {
        this.message = err.error.message || 'Error sending OTP';
      },
    });
  }

  // ✅ Reset Password
  resetPassword() {
    this.authService.resetPassword(this.otp, this.newPassword).subscribe({
      next: (res: any) => {
        this.message = res.message || 'Password reset successful';

        // ✅ Redirect to login page after success
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1500);

        this.step = 1;
        this.email = '';
        this.otp = '';
        this.newPassword = '';
      },
      error: (err) => {
        this.message = err.error.message || 'Error resetting password';
      },
    });
  }
}
