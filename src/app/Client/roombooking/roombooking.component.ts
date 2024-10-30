import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-booking',
  templateUrl: './roombooking.component.html',
  styleUrls: ['./roombooking.component.css'] // Corrected to styleUrls
})
export class RoombookingComponent implements OnInit {
  rooms: any[] = [];

  constructor(public dialog: MatDialog, private http: HttpClient,private router: Router) {}

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

  bookRoom(room: any) {
    // Store the room ID in local storage
    localStorage.setItem('selectedRoomId', room.id); // Assuming room.id is the room ID
     
    // Log the room information to the console
    console.log('Selected Room:', room);

    // Optionally, navigate to the registration form or reservation page
    this.router.navigate(['/client-tabs']); 
  }
}


