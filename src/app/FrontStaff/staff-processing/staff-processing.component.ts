import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-processing',
  templateUrl: './staff-processing.component.html',
  styleUrl: './staff-processing.component.css'
})
export class StaffProcessingComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
