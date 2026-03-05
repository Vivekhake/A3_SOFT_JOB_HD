import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  standalone: true,
  selector: 'app-oauth-success',
  template: `
    <div>
      <h2>Google OAuth Success</h2>
      <p>Token: {{ token }}</p>
      <!-- Display the token -->
      <p>First Name: {{ firstName }}</p>
      <p>Email: {{ email }}</p>
      <img *ngIf="profileUrl" [src]="profileUrl" alt="Profile Picture" />
    </div>
  `,
  imports: [CommonModule], // Add CommonModule to imports
})
export class OAuthSuccessComponent implements OnInit {
  token: string | null = null;
  firstName: string | null = null;
  email: string | null = null;
  profileUrl: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      // Capture the query parameters
      this.token = params['token'];
      this.firstName = params['first_name'];
      this.email = params['email'];
      this.profileUrl = params['profile'];

      if (this.token) {
        // ✅ Save the token in localStorage for future requests
        localStorage.setItem('authToken', this.token);

        // Optionally store user info
        localStorage.setItem(
          'user',
          JSON.stringify({
            first_name: this.firstName,
            email: this.email,
            profile_url: this.profileUrl,
          }),
        );

        // ✅ Redirect to home or desired route
        this.router.navigate(['/']);
      } else {
        console.error('Token is missing or invalid!');
        this.router.navigate(['/login']);
      }
    });
  }
}
