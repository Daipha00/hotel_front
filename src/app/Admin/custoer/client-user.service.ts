// client-user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientUser } from './client-user.model';

@Injectable({
  providedIn: 'root'
})
export class ClientUserService {
  private apiUrl = 'http://localhost:8080/client'; // Update this URL if needed

  constructor(private http: HttpClient) {}

  // Create or update a client
  registerNewClient(clientUser: ClientUser): Observable<ClientUser> {
    return this.http.post<ClientUser>(this.apiUrl, clientUser);
  }

  // Retrieve all clients
  getAllClients(): Observable<ClientUser[]> {
    return this.http.get<ClientUser[]>(this.apiUrl);
  }

  // Retrieve a client by ID
  getClientById(id: number): Observable<ClientUser> {
    return this.http.get<ClientUser>(`${this.apiUrl}/${id}`);
  }

  // Retrieve reservations by client ID
  getReservationsByClientId(id: number): Observable<any[]> { // Replace 'any[]' with 'Reservation[]' if you have a Reservation model
    return this.http.get<any[]>(`${this.apiUrl}/${id}/reservation`);
  }

  // Update a client
  updateClient(id: number, clientUser: ClientUser): Observable<ClientUser> {
    return this.http.put<ClientUser>(`${this.apiUrl}/${id}`, clientUser);
  }

  // Delete a client by ID
  deleteClient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
