import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-checkin-out',
  templateUrl: './staff-checkin-out.component.html',
  styleUrl: './staff-checkin-out.component.css'
})
export class StaffCheckinOutComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  availableRooms = ['Room 101', 'Room 102', 'Room 103', 'Room 104'];
  assignedRoom: string | null = null;

  // For Check-In Form
  guestNameCheckIn = '';
  reservationId = '';
  initialPayment: number | null = null;

  // For Check-Out Form
  guestNameCheckOut = '';
  finalBillAmount: number | null = null;
  paymentAmount: number | null = null;
  roomStatus = '';

  // Simulate check-in action
  confirmCheckIn() {
    if (this.guestNameCheckIn && this.reservationId && this.assignedRoom && this.initialPayment) {
      alert(`Check-In confirmed for ${this.guestNameCheckIn} in ${this.assignedRoom}.`);
    } else {
      alert('Please fill out all fields.');
    }
  }

  // Simulate check-out action
  processCheckOut() {
    if (this.guestNameCheckOut && this.finalBillAmount && this.paymentAmount && this.roomStatus) {
      alert(`Check-Out processed for ${this.guestNameCheckOut}. Room status updated to ${this.roomStatus}.`);
    } else {
      alert('Please fill out all fields.');
    }
  }
}
