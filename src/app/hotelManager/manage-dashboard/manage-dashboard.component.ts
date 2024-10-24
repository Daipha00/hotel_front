import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-dashboard',
  templateUrl: './manage-dashboard.component.html',
  styleUrl: './manage-dashboard.component.css'
})
export class ManageDashboardComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  dailyOperations: string = 'Smooth Operations';
  recentBookings: number = 15;
  revenueFigures: number = 1234.56;  // Example revenue value
  operationsSummary: string = 'The hotel is running smoothly today with no major issues reported. Staff is handling bookings efficiently, and the revenue for today is increasing steadily.';

  constructor() { }

  ngOnInit(): void {
    // Simulate fetching dashboard metrics
    this.fetchDashboardMetrics();
  }

  fetchDashboardMetrics() {
    // Simulate an API call to fetch metrics
    this.dailyOperations = 'Smooth Operations'; // Example data
    this.recentBookings = 15; // Example data
    this.revenueFigures = 1234.56; // Example data
    this.operationsSummary = 'The hotel is running smoothly today with no major issues reported. Staff is handling bookings efficiently, and the revenue for today is increasing steadily.';
  }}