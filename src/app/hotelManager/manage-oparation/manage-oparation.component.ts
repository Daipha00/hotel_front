import { Component } from '@angular/core';
interface Booking {
  
}
@Component({
  selector: 'app-manage-oparation',
  templateUrl: './manage-oparation.component.html',
  styleUrl: './manage-oparation.component.css'
})
export class ManageOparationComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  bookings: Booking[] = [];
  displayedColumns: string[] = ['bookingId', 'guestName', 'bookingDate', 'actions'];

  constructor() {}

  ngOnInit(): void {
    this.loadBookings();
  }

  // Load bookings (dummy data for now)
  loadBookings() {
    this.bookings = [
      { bookingId: 'B123', guestName: 'John Doe', bookingDate: new Date() },
      { bookingId: 'B124', guestName: 'Jane Smith', bookingDate: new Date(new Date().setDate(new Date().getDate() + 1)) },
      { bookingId: 'B125', guestName: 'Alice Johnson', bookingDate: new Date(new Date().setDate(new Date().getDate() + 2)) }
    ];
  }

  // Confirm booking
  confirmBooking(bookingId: string) {
    alert(`Booking ${bookingId} confirmed!`);
    // Implement API call to confirm booking
  }

  // Cancel booking
  cancelBooking(bookingId: string) {
    alert(`Booking ${bookingId} canceled!`);
    // Implement API call to cancel booking
  }

  // Allocate room or venue
  allocateRoom(bookingId: string) {
    alert(`Room allocated for booking ${bookingId}`);
    // Implement API call for room allocation
  }}
