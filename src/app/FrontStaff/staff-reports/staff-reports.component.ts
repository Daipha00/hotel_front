import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-reports',
  templateUrl: './staff-reports.component.html',
  styleUrl: './staff-reports.component.css'
})
export class StaffReportsComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  dailyReservations = [
    { id: 'R001', guestName: 'John Doe', roomNumber: '101', date: '2024-10-12' },
    { id: 'R002', guestName: 'Jane Smith', roomNumber: '102', date: '2024-10-12' },
    { id: 'R003', guestName: 'Michael Johnson', roomNumber: '103', date: '2024-10-12' },
    { id: 'R004', guestName: 'Emily Davis', roomNumber: '104', date: '2024-10-12' }
  ];

  // Dummy data for checkouts
  checkouts = [
    { guestName: 'John Doe', time: '10:00 AM', totalBill: 500.00 },
    { guestName: 'Jane Smith', time: '11:00 AM', totalBill: 750.00 },
    { guestName: 'Michael Johnson', time: '12:30 PM', totalBill: 300.00 }
  ];

  constructor() { }
}
