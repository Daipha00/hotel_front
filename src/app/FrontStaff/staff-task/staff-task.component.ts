import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-task',
  templateUrl: './staff-task.component.html',
  styleUrl: './staff-task.component.css'
})
export class StaffTaskComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  dailyTasks = [
    { task: 'Prepare rooms for new guests', completed: false },
    { task: 'Check minibar inventory in rooms', completed: false },
    { task: 'Send out welcome letters to VIP guests', completed: false },
    { task: 'Review feedback forms from checked-out guests', completed: false }
  ];

  // Mock notifications data
  notifications = [
    { message: 'New reservation for Room 202', type: 'reservation' },
    { message: 'Guest in Room 305 requested extra towels', type: 'guestRequest' },
    { message: 'New reservation for Room 108', type: 'reservation' },
    { message: 'Room 402 is ready for cleaning', type: 'housekeeping' }
  ];

  // Mark task as complete
  markTaskComplete(index: number) {
    this.dailyTasks[index].completed = true;
    alert(`Task "${this.dailyTasks[index].task}" completed!`);
  }
}
