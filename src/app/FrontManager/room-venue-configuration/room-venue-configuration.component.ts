import { Component } from '@angular/core';

@Component({
  selector: 'app-room-venue-configuration',
  templateUrl: './room-venue-configuration.component.html',
  styleUrl: './room-venue-configuration.component.css'
})
export class RoomVenueConfigurationComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  // Room data for the table
  roomData = [
    { roomType: 'Single', price: 100, package: 'Standard' },
    { roomType: 'Double', price: 150, package: 'Deluxe' }
  ];

  // Venue data for the table
  venueData = [
    { venueName: 'Banquet Hall', venuePrice: 500, venueCapacity: 200 },
    { venueName: 'Conference Room', venuePrice: 300, venueCapacity: 100 }
  ];

  // Columns for room and venue tables
  displayedColumns: string[] = ['roomType', 'price', 'package', 'actions'];
  venueColumns: string[] = ['venueName', 'venuePrice', 'venueCapacity', 'actions'];

  // Form inputs
  roomType: string = '';
  roomPrice: number = 0;
  roomPackage: string = '';

  venueName: string = '';
  venuePrice: number = 0;
  venueCapacity: number = 0;

  constructor() {}

  // Save room logic
  saveRoom() {
    if (this.roomType && this.roomPrice && this.roomPackage) {
      this.roomData.push({ roomType: this.roomType, price: this.roomPrice, package: this.roomPackage });
      this.resetRoomForm();
    }
  }

  // Reset room form fields
  resetRoomForm() {
    this.roomType = '';
    this.roomPrice = 0;
    this.roomPackage = '';
  }

  // Save venue logic
  saveVenue() {
    if (this.venueName && this.venuePrice && this.venueCapacity) {
      this.venueData.push({ venueName: this.venueName, venuePrice: this.venuePrice, venueCapacity: this.venueCapacity });
      this.resetVenueForm();
    }
  }

  // Reset venue form fields
  resetVenueForm() {
    this.venueName = '';
    this.venuePrice = 0;
    this.venueCapacity = 0;
  }

  // Edit room logic
  editRoom(room: any) {
    this.roomType = room.roomType;
    this.roomPrice = room.price;
    this.roomPackage = room.package;
  }

  // Delete room logic
  deleteRoom(room: any) {
    this.roomData = this.roomData.filter(r => r !== room);
  }

  // Edit venue logic
  editVenue(venue: any) {
    this.venueName = venue.venueName;
    this.venuePrice = venue.venuePrice;
    this.venueCapacity = venue.venueCapacity;
  }

  // Delete venue logic
  deleteVenue(venue: any) {
    this.venueData = this.venueData.filter(v => v !== venue);
  }
}
