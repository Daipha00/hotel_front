import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user-management.service';
import { Observable } from 'rxjs';
import { HotelManager } from './hotel-manager.model';

@Injectable({
  providedIn: 'root'
})
export class HotelManagerService {

  private apiUrl = 'http://localhost:9090/hotelManager'; // Assuming this is the base API URL for hotel managers
  private baseUrl = 'http://localhost:9090/api/v3/';
  constructor(private http: HttpClient) {}

  // Add new manager
  addManager(hotelManager: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/api/v3/registerNewHotelManager`, hotelManager);
  }

// Delete a hotel manager by ID
deleteHotelManager(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}

// Update an existing hotel manager by ID
updateHotelManager(id: number, hotelManager: HotelManager): Observable<HotelManager> {
  return this.http.put<HotelManager>(`${this.apiUrl}/${id}`, hotelManager);
}

// Retrieve all hotel managers
getAllHotelManagers(): Observable<HotelManager[]> {
  return this.http.get<HotelManager[]>(this.apiUrl);
}

  // Register new manager
  registerManager(manager: HotelManager): Observable<HotelManager> {
    return this.http.post<HotelManager>(`${this.baseUrl}registerNewHotelManager`, manager);
  }
}
