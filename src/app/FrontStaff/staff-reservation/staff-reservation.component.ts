import { Component } from '@angular/core';
interface Reservation {
  id: number;
  guestName: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  status: string;
}
@Component({
  selector: 'app-staff-reservation',
  templateUrl: './staff-reservation.component.html',
  styleUrl: './staff-reservation.component.css'
})
export class StaffReservationComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  roomTypes: string[] = ['Single', 'Double', 'Suite'];
  statuses: string[] = ['Confirmed', 'Pending', 'Cancelled'];
  reservations: Reservation[] = [];
  filteredReservations: Reservation[] = [];
  
  newReservation: Reservation = {
    id: 0,
    guestName: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    status: 'Pending'
  };

  constructor() {
    // Sample data
    this.reservations = [
      { id: 1, guestName: 'John Doe', roomType: 'Double', checkInDate: '2024-10-15', checkOutDate: '2024-10-20', status: 'Confirmed' },
      { id: 2, guestName: 'Jane Smith', roomType: 'Single', checkInDate: '2024-10-18', checkOutDate: '2024-10-22', status: 'Pending' }
    ];
    this.filteredReservations = this.reservations; // Initialize with all reservations
  }

  addReservation() {
    if (this.newReservation.guestName && this.newReservation.roomType && this.newReservation.checkInDate && this.newReservation.checkOutDate) {
      this.newReservation.id = this.reservations.length + 1; // Assign a new ID
      this.reservations.push({ ...this.newReservation });
      this.filteredReservations = [...this.reservations]; // Refresh filtered reservations
      this.clearForm();
    } else {
      alert('Please fill in all fields.');
    }
  }

  clearForm() {
    this.newReservation = { id: 0, guestName: '', roomType: '', checkInDate: '', checkOutDate: '', status: 'Pending' };
  }

  updateReservation(reservation: Reservation) {
    // Logic to update the reservation (e.g., open a modal for editing)
    alert(`Update functionality for reservation ${reservation.id} would go here.`);
  }

  cancelReservation(reservation: Reservation) {
    this.reservations = this.reservations.filter(r => r.id !== reservation.id);
    this.filteredReservations = this.reservations; // Refresh filtered reservations
  }

  onSearchChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.toLowerCase();
    this.filteredReservations = this.reservations.filter(reservation => 
      reservation.guestName.toLowerCase().includes(searchTerm) || 
      reservation.roomType.toLowerCase().includes(searchTerm) || 
      reservation.status.toLowerCase().includes(searchTerm)
    );
  }
}