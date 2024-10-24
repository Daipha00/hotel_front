import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from './account-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
    if (this.loginForm.invalid) return;
  
    this.loading = true;
    const { userName, userPassword } = this.loginForm.value;
  
    this.accountService.login({ userName, userPassword })
      .subscribe({
        next: (response) => {
          this.accountService.saveAuthData(response); // Save token and user info
          this.router.navigate(['/adminDashboard']); // Or navigate based on user role
        },
        error: (err) => {
          this.error = 'Login failed. Please check your credentials.';
          this.loading = false;
        }
      });
  }
  
  }