import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-guest',
  templateUrl: './staff-guest.component.html',
  styleUrl: './staff-guest.component.css'
})
export class StaffGuestComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  guestProfiles = [
    {
      name: 'John Doe',
      preferences: 'Non-smoking room, Sea view',
      history: 'Stayed 3 times, VIP member',
      specialRequests: 'Late checkout, Extra pillows'
    },
    {
      name: 'Jane Smith',
      preferences: 'Vegetarian meals, Quiet room',
      history: 'Stayed 5 times, Frequent traveler',
      specialRequests: 'Airport transfer, Extra towels'
    }
  ];

  // Guest inquiry form data
  guestInquiry = {
    name: '',
    inquiry: ''
  };

  // Handle form submission for guest inquiry
  submitInquiry() {
    if (this.guestInquiry.name && this.guestInquiry.inquiry) {
      alert(`Inquiry submitted by ${this.guestInquiry.name}: ${this.guestInquiry.inquiry}`);
    } else {
      alert('Please fill out all fields.');
    }
  }
}
