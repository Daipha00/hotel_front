import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-room-booking',
  templateUrl: './roombooking.component.html',
  styleUrl: './roombooking.component.css'
})
export class RoombookingComponent implements OnInit{
  rooms: any[] = [];
  constructor(public dialog: MatDialog, private http: HttpClient) {}

  ngOnInit() {
    this.loadRooms();
  }

  loadRooms() {
    this.http.get<any[]>('http://localhost:9090/room').subscribe(data => {
      this.rooms = data;
    }, error => {
      console.error('Error fetching rooms:', error);
    });
  }

  openBookingDialog(room: any): void {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
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
    console.log('Booking room:', room);
  }
}
