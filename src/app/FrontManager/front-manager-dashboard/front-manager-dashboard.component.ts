import { Component } from '@angular/core';

@Component({
  selector: 'app-front-manager-dashboard',
  templateUrl: './front-manager-dashboard.component.html',
  styleUrl: './front-manager-dashboard.component.css'
})
export class FrontManagerDashboardComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
