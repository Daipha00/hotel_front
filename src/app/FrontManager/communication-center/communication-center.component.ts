import { Component } from '@angular/core';

@Component({
  selector: 'app-communication-center',
  templateUrl: './communication-center.component.html',
  styleUrl: './communication-center.component.css'
})
export class CommunicationCenterComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
   // Sample data for notifications and guest messages
   notifications: string[] = [];
   guestMessages: string[] = [];
 
   // Method to send internal notifications
   sendNotification(notification: string): void {
     if (notification) {
       this.notifications.push(notification);
       // Clear the input after sending
       this.notificationInput = '';
     }
   }
 
   // Method to send response to guest inquiries
   sendResponse(response: string): void {
     if (response) {
       this.guestMessages.push(response);
       // Clear the input after sending
       this.guestResponseInput = '';
     }
   }
 
   // Input properties to hold the current message being typed
   notificationInput: string = '';
   guestResponseInput: string = '';
}
