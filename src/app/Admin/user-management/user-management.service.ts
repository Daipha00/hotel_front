import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private apiUrl = 'http://localhost:8080/api/hotel-madnagers'; // Adjust the URL based on your backend

  constructor(private http: HttpClient) {}

  // Add new manager
  addManager(hotelManager: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/registerNewHotelManager`, hotelManager);
  }

  // Get all managers
  getAllManagers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }

  // Delete a manager by id
  deleteManager(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}

// user.model.ts
export interface User {
  id: number;
  userName: string;
  userPassword: string;
  userFirstName: string;
  userLastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  role: Role[];
}

export interface Role {
  id: number;
  roleName: string;
}
