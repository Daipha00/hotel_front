import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-venue-booking',
  templateUrl: './venuebooking.component.html',
  styleUrls: ['./venuebooking.component.css'] // Corrected to styleUrls
})
export class VenuebookingComponent implements OnInit {
  venues: any[] = [];

  constructor(public dialog: MatDialog, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadVenues();
  }


  loadVenues() {
    this.http.get<any[]>('http://localhost:9090/venue').subscribe(
        data => {
            console.log('Fetched Venues:', data); // Log the fetched rooms
            this.venues = data;
        },
        error => {
            console.error('Error fetching venues:', error);
        }
    );
}

  bookVenue(venue: any) {
    console.log('Selected Venue:', venue); // Log the entire room object
    
    // Use 'id' instead of 'roomId'
    if (typeof venue.id === 'number') {
        localStorage.setItem('selectedVenueId', venue.id.toString()); // Store as string
    } else {
        console.error('Invalid venueId:', venue.id);
    }
    
    localStorage.removeItem('selectedRoomId'); // Clear previous venue selection
    this.router.navigate(['/client-forms'], { queryParams: { isVenue: true, venueId: venue.id } }); // Use 'id' instead of 'roomId'
  }
}
