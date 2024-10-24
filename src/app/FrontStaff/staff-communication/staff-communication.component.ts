import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-communication',
  templateUrl: './staff-communication.component.html',
  styleUrl: './staff-communication.component.css'
})
export class StaffCommunicationComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
