import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FrontOfficerManager } from './front-officer-manager.model';
@Injectable({
  providedIn: 'root',
})
export class FrontOfficeManagerService {
  private apiUrl = "http://localhost:9090/frontManager"; // Update with your actual API URL
    private add = "http:localhost:9090/api/v3";
  constructor(private http: HttpClient) {}

  // Retrieve all front officer managers
  getAllFrontOfficerManagers(): Observable<FrontOfficerManager[]> {
    return this.http.get<FrontOfficerManager[]>(this.apiUrl);
  }

  // Update a front officer manager
  updateFrontOfficerManager(id: number, frontOfficerManager: FrontOfficerManager): Observable<FrontOfficerManager> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FrontOfficerManager>(url, frontOfficerManager);
  }

  // Delete a front officer manager by ID
  deleteFrontOfficerManager(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  // Register a new front officer manager
  registerNewFrontManager(frontOfficerManager: FrontOfficerManager): Observable<FrontOfficerManager> {
    const url = `${this.add}/registerNewFrontManager`;
    return this.http.post<FrontOfficerManager>(url, frontOfficerManager);
  }
}
