import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrl: './staff-dashboard.component.css'
})
export class StaffDashboardComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

   // Mock Data
   todayCheckIns = [
    { guestName: 'John Doe', roomNumber: '101' },
    { guestName: 'Jane Smith', roomNumber: '102' },
    { guestName: 'Alice Johnson', roomNumber: '103' },
  ];

  todayCheckOuts = [
    { guestName: 'Bob Brown', roomNumber: '104' },
    { guestName: 'Charlie Davis', roomNumber: '105' },
  ];

  activeReservations = [
    { guestName: 'Eve White', roomNumber: '106', date: '2024-10-12' },
    { guestName: 'Frank Black', roomNumber: '107', date: '2024-10-13' },
  ];

  pendingTasks = [
    { description: 'Prepare room 101 for check-in' },
    { description: 'Clean room 104 after check-out' },
    { description: 'Restock minibar in room 102' },
  ];
}
