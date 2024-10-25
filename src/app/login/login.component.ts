import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;
  isPasswordVisible = false; // Property for password visibility

  constructor(private http: HttpClient, private router: Router) {
    // Initialize the form group with controls and validators
    this.loginForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userPassword: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {}

  // Getter for form controls
  get f() {
    return this.loginForm.controls;
  }

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  // Handle form submission
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return; // Exit if the form is invalid
    }

    this.loading = true; // Set loading state
    this.error = null; // Reset error message

    // Prepare the login data
    const loginData = {
      userName: this.loginForm.value.userName,
      userPassword: this.loginForm.value.userPassword
    };

    // Send a POST request to the API
    this.http.post('http://localhost:9090/client/login', loginData)
      .subscribe({
        next: (response: any) => {
          // Check if the response indicates success
          if (response.success) {
            // Navigate to the dashboard or home page
            this.router.navigate(['/roombooking']);
          } else {
            this.error = 'Invalid username or password.'; // Set error message
          }
          this.loading = false; // Reset loading state
        },
        error: (err) => {
          this.error = 'An error occurred. Please try again.'; // Set error message
          this.loading = false; // Reset loading state
        }
      });
  }
}