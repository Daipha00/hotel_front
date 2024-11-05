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
        this.venues = data;
      },
      error => {
        console.error('Error fetching venues:', error);
      }
    );
  }

  bookVenue(venue: any) {
    // Store the venue ID in local storage
    localStorage.setItem('selectedVenueId', venue.id); // Assuming venue.id is the venue ID
    localStorage.removeItem('selectedRoomId'); // Clear any previous room ID
  
    // Log the venue information to the console for debugging
    console.log('Selected Venue:', venue);
  
    // Navigate to the registration form or reservation page
    this.router.navigate(['/client-forms'], { queryParams: { isRoom: false, venueId: venue.id } });
  }
}
