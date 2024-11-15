import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-booking',
  templateUrl: './roombooking.component.html',
  styleUrls: ['./roombooking.component.css']
})
export class RoombookingComponent implements OnInit {
  rooms: any[] = [];

  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadRooms();
  }

  loadRooms() {
    this.http.get<any[]>('http://localhost:9090/room').subscribe(
        data => {
            console.log('Fetched Rooms:', data); // Log the fetched rooms
            this.rooms = data;
        },
        error => {
            console.error('Error fetching rooms:', error);
        }
    );
}

bookRoom(room: any) {
  console.log('Selected Room:', room); // Log the entire room object
  
  // Use 'id' instead of 'roomId'
  if (typeof room.id === 'number') {
      localStorage.setItem('selectedRoomId', room.id.toString()); // Store as string
  } else {
      console.error('Invalid roomId:', room.id);
  }
  
  localStorage.removeItem('selectedVenueId'); // Clear previous venue selection
  this.router.navigate(['/client-forms'], { queryParams: { isRoom: true, roomId: room.id } }); // Use 'id' instead of 'roomId'
}
}
