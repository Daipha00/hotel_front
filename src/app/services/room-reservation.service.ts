import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomReservation } from '../Classes/room-reservation';

@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {
  [x: string]: any;



  private apiUrl = 'http://localhost:9090/room_reservation'; // Adjust the URL as necessary

  constructor(private http: HttpClient) {}

  createReservation(reservation: RoomReservation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?clientId=${reservation.clientId}&roomId=${reservation.roomId}`, reservation);
  }
}
