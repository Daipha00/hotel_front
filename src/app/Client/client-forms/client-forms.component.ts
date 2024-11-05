import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-forms',
  templateUrl: './client-forms.component.html',
  styleUrls: ['./client-forms.component.css']
})
export class ClientFormsComponent implements OnInit {
  selectedIndex: number = 0; // Default to the first tab

  constructor(private router: Router) {}

  ngOnInit() {
    this.setSelectedIndex(); // Set the selected index based on the current route
  }

  // Handle tab change
  onTabChange(event: any) {
    const tabRoutes = ['registration', 'reservation-form', 'payment'];
    const selectedTabRoute = tabRoutes[event.index];
    this.router.navigate([`/client-forms/${selectedTabRoute}`]);
    this.selectedIndex = event.index;
  }

  // Set the selected index based on the current route
  setSelectedIndex() {
    if (this.router.url.includes('registration')) {
      this.selectedIndex = 0;
    } else if (this.router.url.includes('reservation-form')) {
      this.selectedIndex = 1;
    } else if (this.router.url.includes('payment')) {
      this.selectedIndex = 2;
    }
  }
}
