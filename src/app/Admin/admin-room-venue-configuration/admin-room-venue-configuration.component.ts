import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-room-venue-configuration',
  templateUrl: './admin-room-venue-configuration.component.html',
  styleUrl: './admin-room-venue-configuration.component.css'
})
export class AdminRoomVenueConfigurationComponent implements OnInit{
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
 // Room properties
  roomType: string = '';
  roomPax: number = 0;
  roomPrice: number = 0;
  
  roomDescription: string = '';
  roomImage: File | null = null;
  roomData: any[] = [];
  displayedColumns: string[] = ['roomType', 'pax', 'price', 'description', 'actions'];

  // Venue properties
  venueType: string = '';
  venueCapacity: number = 0;
  venuePrice: number = 0;
  venueLocation: string = '';
  venueAvailabilityStatus: string = '';
  venueDescription: string = '';
  venueImage: File | null = null;
  venuePackage: string = '';
  venueData: any[] = [];
  venueColumns: string[] = ['venueType', 'capacity', 'price', 'location','description', 'actions'];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadRooms();
    this.loadVenues();
  }

  // API: Fetch Rooms
  loadRooms() {
    this.http.get<any[]>('http://localhost:9090/room').subscribe(data => {
      this.roomData = data;
    }, error => {
      console.error('Error fetching rooms:', error);
    });
  }

  // API: Save Room
  saveRoom() {
    const formData = new FormData();
  
    formData.append('roomType', this.roomType);
    formData.append('pax', this.roomPax.toString());
    formData.append('price', this.roomPrice.toString());
   
    formData.append('description', this.roomDescription);
    if (this.roomImage) { // Check if the image is selected
      formData.append('image', this.roomImage); // Make sure this is a File object
    } else {
      console.error('No image file selected');
    }
  
    this.http.post('http://localhost:9090/room', formData).subscribe(response => {
      console.log('Room saved successfully', response);
      this.loadRooms();
    }, error => {
      console.error('Error saving room:', error);
    });
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file) {
      this.roomImage = file; // Store the selected file
    }
  }
  
 

  // API: Edit Room
  editRoom(room: any) {
    this.roomType = room.roomType;
    this.roomPax = room.pax;
    this.roomPrice = room.price;
   
    this.roomDescription = room.description;
    // Handle the image as needed
  }

  // API: Delete Room
  deleteRoom(room: any) {
    this.http.delete(`http://localhost:9090/room/${room.id}`).subscribe(() => {
      console.log('Room deleted successfully');
      this.loadRooms(); // Refresh room data after deletion
    }, error => {
      console.error('Error deleting room:', error);
    });
  }

  // API: Fetch Venues
  loadVenues() {
    this.http.get<any[]>('http://localhost:9090/venue').subscribe(data => {
      this.venueData = data;
    }, error => {
      console.error('Error fetching venues:', error);
    });
  }

  saveVenue() {
    const formData = new FormData();
    
    // Append all venue fields to FormData
    formData.append('venueType', this.venueType);
    formData.append('capacity', this.venueCapacity.toString());
    formData.append('price', this.venuePrice.toString());
    formData.append('location', this.venueLocation);
    formData.append('availabilityStatus', this.venueAvailabilityStatus);
    formData.append('venuePackage', this.venuePackage);  // Add this field
    formData.append('description', this.venueDescription);
    
    // Append the image if it's selected
    if (this.venueImage) {
      formData.append('image', this.venueImage);  // Ensure it's a File object
    } else {
      console.error('No venue image file selected');
    }
  
    this.http.post('http://localhost:9090/venue', formData).subscribe(response => {
      console.log('Venue saved successfully', response);
      this.loadVenues(); // Refresh venue data after saving
    }, error => {
      console.error('Error saving venue:', error);
    });
  }
  
  
  onVenueFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0];
    if (file) {
      this.venueImage = file; // Store the selected file
    }
  }
  
  // API: Edit Venue
  editVenue(venue: any) {
    this.venueType = venue.venueType;
    this.venueCapacity = venue.capacity;
    this.venuePrice = venue.price;
    this.venueLocation = venue.location;
    this.venueAvailabilityStatus = venue.availabilityStatus;
    this.venueDescription = venue.description;
    // Handle the image as needed
  }

  // API: Delete Venue
  deleteVenue(venue: any) {
    this.http.delete(`http://localhost:9090/venue/${venue.id}`).subscribe(() => {
      console.log('Venue deleted successfully');
      this.loadVenues(); // Refresh venue data after deletion
    }, error => {
      console.error('Error deleting venue:', error);
    });
  }}