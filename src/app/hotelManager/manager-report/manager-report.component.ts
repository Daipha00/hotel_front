import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-report',
  templateUrl: './manager-report.component.html',
  styleUrl: './manager-report.component.css'
})
export class ManagerReportComponent {
 
  // Sample data for daily reports (can be fetched from API)
  occupancyReport = {
    totalOccupiedRooms: 85,
    totalAvailableRooms: 15
  };

  housekeepingReport = {
    cleanedRooms: 70,
    pendingRooms: 30
  };

  constructor() {}

  ngOnInit(): void {
    // Fetch daily reports or other report data if needed
  }

  // Methods to generate reports
  generateRevenueReport() {
    alert('Generating revenue report...');
    // Implement actual report generation logic (API call)
  }

  generateBookingReport() {
    alert('Generating bookings report...');
    // Implement actual report generation logic (API call)
  }

  generateRoomStatusReport() {
    alert('Generating room status report...');
    // Implement actual report generation logic (API call)
  }
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
