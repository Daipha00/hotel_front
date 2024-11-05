import { Component } from '@angular/core';
import { Reservation } from './reservationlist.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reservationlist',
  templateUrl: './reservationlist.component.html',
  styleUrl: './reservationlist.component.css'
})
export class ReservationlistComponent {
  reservations: Reservation[] = [];
  private apiUrl = 'http://localhost:9090/reservation';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadReservations();
  }
 loadReservations(): void {
  this.http.get(this.apiUrl, { responseType: 'text' }).subscribe(
    (data) => {
      console.log('Raw response:', data); // Check for extra characters here
      try {
        this.reservations = JSON.parse(data) as Reservation[];
      } catch (error) {
        console.error('JSON parse error:', error);
      }
    },
    (error) => {
      console.error('Error fetching reservations:', error);
    }
  );
}

  
  deleteReservation(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.reservations = this.reservations.filter(res => res.id !== id);
    });
  }


}
