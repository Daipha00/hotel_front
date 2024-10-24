import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrl: './support.component.css'
})
export class SupportComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  userManuals = [
    { title: 'User Manual for Feature A', link: 'https://example.com/manualA.pdf' },
    { title: 'User Manual for Feature B', link: 'https://example.com/manualB.pdf' },
    // Add more manuals as needed
  ];

  troubleshootingIssues = [
    {
      title: 'Issue with Feature A',
      description: 'Users are experiencing issues with Feature A not responding.',
      solution: 'Try resetting the application or clearing the cache.'
    },
    {
      title: 'Login Problems',
      description: 'Some users are unable to log in.',
      solution: 'Ensure your password is correct or reset it if necessary.'
    },
    // Add more issues as needed
  ];

  supportInquiry = {
    name: '',
    email: '',
    message: ''
  };

  submitSupportInquiry() {
    // Logic for handling support inquiry submission
    console.log('Support Inquiry Submitted:', this.supportInquiry);
    // Reset form
    this.supportInquiry = { name: '', email: '', message: '' };
  }

}
