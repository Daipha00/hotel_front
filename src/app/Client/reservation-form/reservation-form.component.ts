import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoomReservation } from '../../Classes/room-reservation';
import { RoomReservationService } from '../../services/room-reservation.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationForm: FormGroup;
  clientId!: number; // This will be retrieved from local storage
  roomId!: number; // This should also be set based on the selected room

  constructor(
    private fb: FormBuilder,
    private reservationService: RoomReservationService,
    private router: Router,
    private route: ActivatedRoute,
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
    }

    // Retrieve roomId from route parameters or set it in another way
    this.route.params.subscribe(params => {
      this.roomId = +params['roomId']; // Assuming the route has a roomId parameter
    });
  }

  onSubmit(): void {
    if (this.reservationForm.valid) {
      const reservationData: RoomReservation = {
        ...this.reservationForm.value,
        clientId: this.clientId,
        roomId: this.roomId
      };

      this.reservationService.createReservation(reservationData).subscribe(
        response => {
          console.log('Reservation successful', response);
          // Redirect or show a success message
          this.router.navigate(['/success']); // Adjust the route as necessary
        },
        error => {
          console.error('Error creating reservation', error);
          // Handle error (e.g., show an error message)
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}