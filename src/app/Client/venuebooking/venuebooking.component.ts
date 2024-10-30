import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-venue-booking',
  templateUrl: './venuebooking.component.html',
  styleUrl: './venuebooking.component.css'
})
export class VenuebookingComponent implements OnInit{
  venues: any[] = [];
reservationMenu: any;
  constructor(public dialog: MatDialog, private http: HttpClient, private router:Router) {}

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


  bookVenue(venue: any) {
    // Store the room ID in local storage
    localStorage.setItem('selectedVenueId', venue.id); // Assuming room.id is the room ID
     
    // Log the room information to the console
    console.log('Selected Venue:', venue);

    // Optionally, navigate to the registration form or reservation page
    this.router.navigate(['/client-tabs']); 
  }

  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }
}
