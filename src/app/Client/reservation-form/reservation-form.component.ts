import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomReservationService } from '../../services/room-reservation.service';
import { VenueBookingServiceService } from '../../services/venue-booking-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  @Input() isRoom: boolean = true;  // `true` for room, `false` for venue
  @Input() roomId?: number;         // Room ID if isRoom is true
  @Input() venueId?: number;        // Venue ID if isRoom is false
  reservationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private roomReservationService: RoomReservationService,
    private venueBookingService: VenueBookingServiceService,
    private route: ActivatedRoute
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
    // Read query parameters to set isRoom, roomId, and venueId
    this.route.queryParams.subscribe(params => {
      this.isRoom = params['isRoom'] === 'true'; // Convert string to boolean
      this.roomId = params['roomId'] ? Number(params['roomId']) : undefined; // Convert to number if present
      this.venueId = params['venueId'] ? Number(params['venueId']) : undefined; // Convert to number if present
  
      console.log('isRoom:', this.isRoom);
      console.log('roomId:', this.roomId);
      console.log('venueId:', this.venueId);
  
      if (this.isRoom && !this.roomId) {
        console.error('Room ID is required for room reservation.');
      } else if (!this.isRoom && !this.venueId) {
        console.error('Venue ID is required for venue reservation.');
      }
    });
  }

  onSubmit() {
    if (this.reservationForm.invalid) {
      console.error('Form is invalid.');
      return;
    }

    const clientIdStr = localStorage.getItem('clientId');
    const clientId = Number(clientIdStr);

    // Check for clientId validity and roomId/venueId availability
    if (!clientIdStr || isNaN(clientId)) {
      console.error('Client ID is not found or is invalid.');
      return;
    }
    if (this.isRoom && !this.roomId) {
      console.error('Room ID is required for room reservation.');
      return;
    } else if (!this.isRoom && !this.venueId) {
      console.error('Venue ID is required for venue reservation.');
      return;
    }

    const reservationData = {
      clientId,
      check_in: this.reservationForm.get('check_in')?.value,
      check_out: this.reservationForm.get('check_out')?.value,
      arrival_time: this.reservationForm.get('arrival_time')?.value,
      numberOfGuests: this.reservationForm.get('numberOfGuests')?.value,
      special_request: this.reservationForm.get('special_request')?.value,
      ...(this.isRoom ? { roomId: this.roomId } : { venueId: this.venueId })
    };

    // Call the appropriate reservation service based on `isRoom`
    const reservationService = this.isRoom
      ? this.roomReservationService.createReservation(reservationData)
      : this.venueBookingService.createReservation(reservationData);

    reservationService.subscribe({
      next: (response) => {
        console.log('Reservation successful:', response);
        // Optional: Handle success (e.g., show success message or navigate to another page)
      },
      error: (error) => {
        console.error('Error making reservation:', error);
      }
    });
  }
}