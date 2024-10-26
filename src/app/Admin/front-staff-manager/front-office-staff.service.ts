import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FrontOfficeStaff } from './front-office-staff.model';

@Injectable({
  providedIn: 'root'
})
export class FrontOfficeStaffService {
  private apiUrl = 'http://localhost:9090/frontStaff'; // Adjust the URL to match your API's base URL

  constructor(private http: HttpClient) {}

  // Retrieve all FrontOfficeStaff
  getAllFrontOfficeStaff(): Observable<FrontOfficeStaff[]> {
    return this.http.get<FrontOfficeStaff[]>(this.apiUrl);
  }

  // Create or update a FrontOfficeStaff
  saveOrUpdateFrontOfficeStaff(frontOfficeStaff: FrontOfficeStaff): Observable<FrontOfficeStaff> {
    return this.http.post<FrontOfficeStaff>(this.apiUrl, frontOfficeStaff);
  }

  // Update an existing FrontOfficeStaff by ID
  updateFrontOfficeStaff(id: number, frontOfficeStaff: FrontOfficeStaff): Observable<FrontOfficeStaff> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FrontOfficeStaff>(url, frontOfficeStaff);
  }

  // Delete a FrontOfficeStaff by ID
  deleteFrontOfficeStaff(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
