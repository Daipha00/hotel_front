import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-processing',
  templateUrl: './payment-processing.component.html',
  styleUrl: './payment-processing.component.css'
})
export class PaymentProcessingComponent implements OnInit{
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Data sources for the tables
  pendingPayments = []; // replace with actual data
  completedPayments = []; // replace with actual data
  refundedPayments = []; // replace with actual data

  // Define displayed columns for each tab
  displayedColumnsPending = ['id', 'amount', 'status', 'actions'];
  displayedColumnsCompleted = ['id', 'amount', 'status'];
  displayedColumnsRefunded = ['id', 'amount', 'status'];

  ngOnInit(): void {
    // Load your data here
  }

  approvePayment(paymentId: number) {
    // Approve payment logic here
  }

  rejectPayment(paymentId: number) {
    // Reject payment logic here
  }
}
