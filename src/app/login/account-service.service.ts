import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  login(jwtRequest: JwtRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.baseUrl}/authenticate`, jwtRequest);
  }

  // Save the JWT token and user info (excluding password) in sessionStorage
  saveAuthData(response: JwtResponse) {
    const { jwtToken, user } = response;

    // Store the token
    sessionStorage.setItem('token', jwtToken);

    // Store user details (excluding password)
    const userData = {
      id: user.id,
      userName: user.userName,
      userFirstName: user.userFirstName,
      userLastName: user.userLastName,
      address: user.address,
      email: user.email,
      phoneNumber: user.phoneNumber,
      roles: user.role.map(r => r.roleName)  // Store role names
    };

    sessionStorage.setItem('user', JSON.stringify(userData));
  }

  // Get the stored token
  getToken(): string | null {
    return sessionStorage.getItem('token');
  }

  // Get user info from sessionStorage
  getUser(): any {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  // Check whether the user is authenticated
  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }

  // Logout and clear sessionStorage
  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
  }}

  // models/jwt-request.model.ts
export interface JwtRequest {
  userName: string;
  userPassword: string;
}

export interface JwtResponse {
  jwtToken: string;
  user: {
    id: number;
    userName: string;
    userFirstName: string;
    userLastName: string;
    address: string;
    email: string;
    phoneNumber: string;
    role: Array<{
      roleName: string;
      roleDescription: string;
    }>;
  };
}
