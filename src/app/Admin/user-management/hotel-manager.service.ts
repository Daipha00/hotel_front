import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user-management.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelManagerService {

  private apiUrl = 'http://localhost:9090'; // Adjust the URL based on your backend

  constructor(private http: HttpClient) {}

  // Add new manager
  addManager(hotelManager: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/api/v3/registerNewHotelManager`, hotelManager);
  }

  // Get all managers
  getAllManagers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/hotelManager`);
  }

  // Delete a manager by id
  deleteManager(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/hotelManager/${id}`);
  }
}
