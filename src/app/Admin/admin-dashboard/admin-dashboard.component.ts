import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  bookingsCount: number = 0;
  occupancyRate: number = 0;
  notificationsCount: number = 0;
  systemHealthStatus: string = 'Good';

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching dashboard metrics
    this.fetchDashboardMetrics();
  }

  fetchDashboardMetrics() {
    // Simulate an API call to fetch metrics
    this.bookingsCount = 120; // Example data
    this.occupancyRate = 85; // Example data
    this.notificationsCount = 5; // Example data
    this.systemHealthStatus = 'Optimal'; // Example data
  }
}
