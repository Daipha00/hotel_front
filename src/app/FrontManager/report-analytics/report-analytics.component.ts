import { Component } from '@angular/core';
// import { ChartsModule } from 'ng2-charts'; // Removed as it is not exported by the module

@Component({
  selector: 'app-report-analytics',
  templateUrl: './report-analytics.component.html',
  styleUrl: './report-analytics.component.css'
})
export class ReportAnalyticsComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  // Revenue Reports Data
  revenueChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June'];
  revenueChartData = [
    { data: [1000, 1500, 1200, 1800, 2200, 2000], label: 'Revenue' }
  ];
  revenueColumns: string[] = ['month', 'revenue'];
  revenueData = [
    { month: 'January', revenue: 1000 },
    { month: 'February', revenue: 1500 },
    { month: 'March', revenue: 1200 },
    { month: 'April', revenue: 1800 },
    { month: 'May', revenue: 2200 },
    { month: 'June', revenue: 2000 },
  ];

  // Occupancy Reports Data
  occupancyChartLabels: string[] = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  occupancyChartData = [
    { data: [75, 85, 95, 80], label: 'Occupancy Rate (%)' }
  ];

  // Guest Demographics Data
  demographicsColumns: string[] = ['ageGroup', 'numberOfGuests'];
  guestDemographicsData = [
    { ageGroup: '18-25', numberOfGuests: 50 },
    { ageGroup: '26-35', numberOfGuests: 75 },
    { ageGroup: '36-45', numberOfGuests: 60 },
    { ageGroup: '46-60', numberOfGuests: 30 },
    { ageGroup: '60+', numberOfGuests: 20 },
  ];

  // Chart options
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

}
