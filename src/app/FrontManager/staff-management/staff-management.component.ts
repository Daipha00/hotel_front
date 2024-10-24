import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrl: './staff-management.component.css'
})
export class StaffManagementComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  staffList = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Brown' }
  ];

  assignedTasks = [
    { staffName: 'John Doe', taskType: 'Reservation', taskDate: new Date(), priority: 'High', status: 'Pending' },
    { staffName: 'Jane Smith', taskType: 'Duty', taskDate: new Date(), priority: 'Medium', status: 'Completed' },
    { staffName: 'Michael Brown', taskType: 'Reservation', taskDate: new Date(), priority: 'Low', status: 'Pending' }
  ];

  taskCompletionData = [
    { data: [45, 35, 20], label: 'Tasks Completed' }
  ];

  assignTask() {
    // Assign task logic here
  }
}
