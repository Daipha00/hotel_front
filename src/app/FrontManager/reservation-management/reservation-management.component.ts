import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-management',
  templateUrl: './reservation-management.component.html',
  styleUrl: './reservation-management.component.css'
})
export class ReservationManagementComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
   // Dummy data for reservations
   reservations = [
    { name: 'John Doe', date: '2024-10-11', roomType: 'Single', status: 'Confirmed' },
    { name: 'Jane Smith', date: '2024-10-12', roomType: 'Double', status: 'Pending' },
    { name: 'Bob Johnson', date: '2024-10-13', roomType: 'Suite', status: 'Cancelled' }
  ];

  // Dummy data for bookings
  bookings = [
    { guestName: 'John Doe', roomType: 'Single', status: 'Confirmed' },
    { guestName: 'Jane Smith', roomType: 'Double', status: 'Pending' },
    { guestName: 'Bob Johnson', roomType: 'Suite', status: 'Cancelled' }
  ];

  // Filter options for room types and statuses
  roomTypes = ['Single', 'Double', 'Suite', 'Penthouse'];
  statuses = ['Confirmed', 'Pending', 'Cancelled'];

  // Columns for reservation table
  displayedColumns: string[] = ['name', 'date', 'roomType', 'status'];

  // Columns for booking management table
  bookingColumns: string[] = ['guestName', 'roomType', 'status', 'action'];

  // Selected filter values
  selectedDate: string | undefined;
  selectedRoomType: string | undefined;
  selectedStatus: string | undefined;

  // Filtered reservations list
  filteredReservations = [...this.reservations];

  constructor() {}

  // Filtering logic based on selected criteria
  applyFilter() {
    this.filteredReservations = this.reservations.filter(reservation => {
      const matchesDate = this.selectedDate ? reservation.date === this.selectedDate : true;
      const matchesRoomType = this.selectedRoomType ? reservation.roomType === this.selectedRoomType : true;
      const matchesStatus = this.selectedStatus ? reservation.status === this.selectedStatus : true;
      return matchesDate && matchesRoomType && matchesStatus;
    });
  }

  // Method to handle booking confirmation
  confirmBooking(booking: any) {
    booking.status = 'Confirmed';
    alert(`Booking for ${booking.guestName} has been confirmed.`);
  }

  // Method to handle booking cancellation
  cancelBooking(booking: any) {
    booking.status = 'Cancelled';
    alert(`Booking for ${booking.guestName} has been cancelled.`);
  }

  // Save the reservation (for Create/Edit form)
  saveReservation(reservationData: any) {
    // Mock saving process for new or edited reservation
    alert('Reservation saved successfully.');
    console.log('Saved reservation:', reservationData);
  }
}
