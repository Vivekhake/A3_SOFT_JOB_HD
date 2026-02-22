import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  // ================= LOGIN =================
  login(data: any) {
    return this.http.post(`${this.baseUrl}/login`, data, {
      responseType: 'text',
    });
  }

  // ================= REGISTER =================
  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }

  // ================= PROFILE =================
  getProfile() {
    return this.http.get(`${this.baseUrl}/profile`);
  }

  // ================= FORGOT PASSWORD (SEND OTP) =================
  sendOtp(email: string) {
    return this.http.post(`${this.baseUrl}/send-otp`, { email });
  }

  // ================= RESET PASSWORD =================
  resetPassword(otp: string, password: string) {
    return this.http.post(
      `${this.baseUrl}/reset-password`,
      {
        otp,
        password,
      },
      { responseType: 'text' },
    );
  }

  // ================= TOKEN METHODS =================
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
