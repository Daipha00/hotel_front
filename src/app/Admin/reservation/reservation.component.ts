import { Component, OnInit } from '@angular/core';
import { Reservation } from './reservation.model'; // Adjust the path as necessary
import { ReservationService } from './reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {} // Injecting ReservationService

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getReservations().subscribe(
      (data) => {
        this.reservations = data; // Assign the fetched data to the reservations array
      },
      (error) => {
        console.error('Error fetching reservations', error); // Handle any errors
      }
    );
  }

  // Other component methods for creating, updating, and deleting reservations
}
