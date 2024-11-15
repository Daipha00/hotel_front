import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomReservation } from '../../Classes/room-reservation';
import { RoomReservationService } from '../../services/room-reservation.service';
import { isPlatformBrowser } from '@angular/common';
import { VenueBookingServiceService } from '../../services/venue-booking-service.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup;
  clientId!: number; // This will be retrieved from local storage
  roomId!: number | null; // This will be set based on the selected room
  venueId!: number | null; // This will be set based on the selected venue

  constructor(
    private fb: FormBuilder,
    private reservationService: RoomReservationService,
    private venueReservationService:VenueBookingServiceService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.reservationForm = this.fb.group({
      check_in: ['', Validators.required],
      check_out: ['', Validators.required],
      arrival_time: ['', Validators.required],
      numberOfGuests: [1, [Validators.required, Validators.min(1)]],
      special_request: ['']
    });
  }

  ngOnInit(): void {
    // Check if running in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Retrieve the clientId from local storage
      const storedClientId = localStorage.getItem('clientId');
      if (storedClientId) {
        this.clientId = +storedClientId; // Convert to number
      }

      // Retrieve roomId from local storage
      const storedRoomId = localStorage.getItem('selectedRoomId');
      this.roomId = storedRoomId ? +storedRoomId : null; // Convert to number or null

      // Retrieve venueId from local storage
      const storedVenueId = localStorage.getItem('selectedVenueId');
      this.venueId = storedVenueId ? +storedVenueId : null; // Convert to number or null

      // Conditional logging based on selected venue or room
      if (this.roomId !== null) {
        console.log('Stored Room ID:', this.roomId); // Log the retrieved room ID
      }
      if (this.venueId !== null) {
        console.log('Stored Venue ID:', this.venueId); // Log the retrieved venue ID
      }
    }
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const reservationData: RoomReservation = {
        ...this.reservationForm.value,
        clientId: this.clientId,
        venueId: this.venueId, // Include venueId
        roomId: this.roomId // Include roomId, but check if it's null
      };
  
      // Check if roomId or venueId is available and adjust the reservation data accordingly
      if (this.roomId) {
        console.log('Making reservation for Room ID:', this.roomId);
        // Room reservation logic can go here
        console.log('Reservation Data:', reservationData); // Log the reservation data
        this.reservationService.createReservation(reservationData).subscribe(
          response => {
            console.log('Reservation successful', response);
            this.router.navigate(['/payment']); // Adjust the route as necessary
          },
          error => {
            console.error('Error creating reservation', error);
          }
        );
      } 
      
      
      
      else if (this.venueId) {
        console.log('Making reservation for Venue ID:', this.venueId);
        // If roomId is null, we may want to remove it from the reservation data
        delete reservationData.roomId; // Remove roomId from the data if it's null
        console.log('Reservation Data:', reservationData); // Log the reservation data
        this.venueReservationService.createReservation(reservationData).subscribe(
          response => {
            console.log('Reservation successful', response);
            this.router.navigate(['/payment']); // Adjust the route as necessary
          },
          error => {
            console.error('Error creating reservation', error);
          }
        );
      } else {
        console.error('No Room or Venue selected for reservation');
        return; // Exit if neither is selected
      }
  
     
    } else {
      console.log('Form is invalid');
    }
  }
}