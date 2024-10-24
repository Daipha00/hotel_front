import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FrontOfficeManager } from './front-office-manager.model';

@Injectable({
  providedIn: 'root'
})
export class FrontOfficeManagerService {

  private apiUrl = 'http://localhost:9090/frontManager'; // Base API URL
    private base = 'http://localhost:9090/api/v3/registerNewFrontManager';
  constructor(private http: HttpClient) { }

  // Register a new FrontOfficeManager
  registerNewFrontManager(manager: FrontOfficeManager): Observable<FrontOfficeManager> {
    const url = `${this.base}`;
    return this.http.post<FrontOfficeManager>(url, manager);
  }

  // Get all FrontOfficeManagers
  getAllFrontOfficeManagers(): Observable<FrontOfficeManager[]> {
    return this.http.get<FrontOfficeManager[]>(this.apiUrl);
  }

  // Update a FrontOfficeManager by ID
  updateFrontOfficeManager(id: number, manager: FrontOfficeManager): Observable<FrontOfficeManager> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FrontOfficeManager>(url, manager);
  }

  // Delete a FrontOfficeManager by ID
  deleteFrontOfficeManager(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
