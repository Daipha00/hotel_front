import { Component } from '@angular/core';

@Component({
  selector: 'app-report-generation',
  templateUrl: './report-generation.component.html',
  styleUrl: './report-generation.component.css'
})
export class ReportGenerationComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Form model variables
  reportDate: string = '';
  startDate: string = '';
  endDate: string = '';

  constructor() {}

  // Generate Daily Revenue Report
  generateRevenueReport() {
    if (!this.reportDate) {
      alert('Please select a date for the revenue report.');
      return;
    }
    // Logic to generate revenue report based on the selected date
    console.log(`Generating revenue report for date: ${this.reportDate}`);
    // Example: Call API or service method to generate the report
    // this.reportService.generateRevenueReport(this.reportDate).subscribe(...);
  }

  // Generate Occupancy Report
  generateOccupancyReport() {
    if (!this.startDate || !this.endDate) {
      alert('Please select both start and end dates for the occupancy report.');
      return;
    }
    // Logic to generate occupancy report based on selected date range
    console.log(`Generating occupancy report from ${this.startDate} to ${this.endDate}`);
    // Example: Call API or service method to generate the report
    // this.reportService.generateOccupancyReport(this.startDate, this.endDate).subscribe(...);
  }

  // Generate Guest Stay Duration Report
  generateStayDurationReport() {
    if (!this.startDate || !this.endDate) {
      alert('Please select a date range to generate guest stay duration report.');
      return;
    }
    // Logic to generate guest stay duration report
    console.log(`Generating guest stay duration report from ${this.startDate} to ${this.endDate}`);
    // Example: Call API or service method to generate the report
    // this.reportService.generateStayDurationReport(this.startDate, this.endDate).subscribe(...);
  }

  // View Long Stay Guest Report
  viewLongStayReport() {
    // Logic to fetch and display long-stay guest report
    console.log('Viewing long stay guest report...');
    // Example: Call API or service method to view the report
    // this.reportService.getLongStayGuestReport().subscribe(...);
  }

  // View Returning Guests Report
  viewReturningGuestsReport() {
    // Logic to fetch and display returning guest report
    console.log('Viewing returning guests report...');
    // Example: Call API or service method to view the report
    // this.reportService.getReturningGuestsReport().subscribe(...);
  }
}
