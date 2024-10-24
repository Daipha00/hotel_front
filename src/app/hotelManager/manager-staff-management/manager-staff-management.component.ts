import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-staff-management',
  templateUrl: './manager-staff-management.component.html',
  styleUrl: './manager-staff-management.component.css'
})
export class ManagerStaffManagementComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
   // Mock data for Employee Directory
   staffList = [
    { name: 'Alice Smith', position: 'Front Desk Manager', department: 'Front Office', photo: 'assets/img/alice.jpg' },
    { name: 'John Doe', position: 'Maintenance Head', department: 'Maintenance', photo: 'assets/img/john.jpg' },
    { name: 'Emily Davis', position: 'Housekeeping Lead', department: 'Housekeeping', photo: 'assets/img/emily.jpg' }
  ];

  // Mock data for Performance Reviews
  performanceReviews = [
    { name: 'Alice Smith', department: 'Front Office', score: 8.5, comments: 'Great team player with excellent communication skills.' },
    { name: 'John Doe', department: 'Maintenance', score: 7.8, comments: 'Efficient worker, but needs improvement in problem-solving.' },
    { name: 'Emily Davis', department: 'Housekeeping', score: 9.2, comments: 'Outstanding performance and attention to detail.' }
  ];

  // Mock data for Scheduling
  displayedColumns: string[] = ['employee', 'shift', 'day'];
  scheduleData = [
    { employee: 'Alice Smith', shift: 'Morning', day: 'Monday' },
    { employee: 'John Doe', shift: 'Afternoon', day: 'Tuesday' },
    { employee: 'Emily Davis', shift: 'Evening', day: 'Wednesday' }
  ];
}
