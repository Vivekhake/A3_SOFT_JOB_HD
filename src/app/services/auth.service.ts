import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = 'http://localhost:8080/api/auth';
  private passwordUrl = 'http://localhost:8080/api/password';
  private googleUrl = 'http://localhost:8080/api/google';

  // Modal State Management
  public showLoginModal$ = new BehaviorSubject<boolean>(false);
  public showRegisterModal$ = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  // ================= LOGIN =================
  login(data: any) {
    return this.http.post<any>(`${this.authUrl}/login`, data);
  }

  // ================= GOOGLE LOGIN =================
  googleLogin(data: any) {
    return this.http.post<any>(`${this.googleUrl}/login`, data);
  }

  // ================= REGISTER =================
  register(data: any) {
    return this.http.post(`${this.authUrl}/register`, data);
  }

  // ================= LOCAL USER PROFILE =================
  getProfile() {
    const token = this.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${this.authUrl}/name`, { headers });
  }

  // ================= OAUTH USER PROFILE =================
  getUserProfile() {
    const token = this.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<any>(`${this.authUrl}/data`, { headers });
  }

  // ================= SEND OTP =================
  sendOtp(email: string) {
    return this.http.post(`${this.passwordUrl}/send-otp`, { email });
  }

  // ================= RESET PASSWORD =================
  resetPassword(otp: string, password: string) {
    return this.http.post(`${this.passwordUrl}/reset`, {
      otp,
      password,
    });
  }

  // ================= TOKEN METHODS =================
  saveToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  getToken() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }

    return null;
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem('loginType');
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // ================= MODAL METHODS =================
  openLoginModal() {
    this.showLoginModal$.next(true);
    this.showRegisterModal$.next(false);
  }

  closeLoginModal() {
    this.showLoginModal$.next(false);
  }

  openRegisterModal() {
    this.showRegisterModal$.next(true);
    this.showLoginModal$.next(false);
  }

  closeRegisterModal() {
    this.showRegisterModal$.next(false);
  }
}
