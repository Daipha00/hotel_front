import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomReservation } from '../Classes/room-reservation';
import { VenueReservation } from '../Classes/venue-reservation';

@Injectable({
  providedIn: 'root'
})
export class VenueBookingServiceService {

 
  private apiUrl = 'http://localhost:9090/venue_reservation'; // Adjust the URL as necessary

  constructor(private http: HttpClient) {}

  createReservation(venuereservation: VenueReservation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?clientId=${venuereservation.clientId}&roomId=${venuereservation.venueId}`, venuereservation);
  }
}
