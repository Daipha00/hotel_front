import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { HttpClient } from '@angular/common/http';
import { BookingDialogVenueComponent } from '../booking-dialog-venue/booking-dialog-venue.component';

@Component({
  selector: 'app-venue-booking',
  templateUrl: './venuebooking.component.html',
  styleUrl: './venuebooking.component.css'
})
export class VenuebookingComponent implements OnInit{
  venues: any[] = [];
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit() {
    this.loadVenues();
  }

  loadVenues() {
    this.http.get<any[]>('http://localhost:9090/venue').subscribe(data => {
      this.venues = data;
    }, error => {
      console.error('Error fetching rooms:', error);
    });
  }

  openBookingDialog(room: any): void {
    const dialogRef = this.dialog.open(BookingDialogVenueComponent, {
      width: '400px',
      data: {} // You can pass any data to the dialog if needed
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Booking confirmed:', result);
      } else {
        console.log('Booking canceled');
      }
    });
    console.log('Booking venue:', this.venues);
  }
}
