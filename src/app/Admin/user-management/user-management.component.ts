import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';


interface User {
  username: string;
  password: string;
  firstName: string;
  address: string;
  email: string;
  phoneNumber: string;
}
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  newManager: User = {
    username: '',
    password: '',
    firstName: '',
    address: '',
    email: '',
    phoneNumber: ''
  };

  newFrontOfficeManager: User = {
    username: '',
    password: '',
    firstName: '',
    address: '',
    email: '',
    phoneNumber: ''
  };

  newFrontOfficeStaff: User = {
    username: '',
    password: '',
    firstName: '',
    address: '',
    email: '',
    phoneNumber: ''
  };

  managerData: User[] = [];
  frontOfficeManagerData: User[] = [];
  frontOfficeStaffData: User[] = [];

  displayedColumns: string[] = ['username', 'email', 'phoneNumber'];
  frontOfficeDisplayedColumns: string[] = ['username', 'email', 'phoneNumber'];
  frontOfficeStaffDisplayedColumns: string[] = ['username', 'email', 'phoneNumber'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Load existing user data (this could be fetched from a service)
    this.loadUsers();
  }

  loadUsers() {
    // Simulated data; replace this with actual service calls
    this.managerData = [
      { username: 'manager1', password: 'pass1', firstName: 'John', address: '123 Street', email: 'manager1@example.com', phoneNumber: '1234567890' },
      // More managers...
    ];
    this.frontOfficeManagerData = [
      { username: 'frontmanager1', password: 'pass1', firstName: 'Jane', address: '456 Avenue', email: 'frontmanager1@example.com', phoneNumber: '0987654321' },
      // More front office managers...
    ];
    this.frontOfficeStaffData = [
      { username: 'staff1', password: 'pass1', firstName: 'Alice', address: '789 Boulevard', email: 'staff1@example.com', phoneNumber: '1122334455' },
      // More staff...
    ];
  }

  onSubmitManager() {
    if (this.newManager.username && this.newManager.email) {
      this.managerData.push({ ...this.newManager });
      this.resetManagerForm();
    }
  }

  onSubmitFrontOfficeManager() {
    if (this.newFrontOfficeManager.username && this.newFrontOfficeManager.email) {
      this.frontOfficeManagerData.push({ ...this.newFrontOfficeManager });
      this.resetFrontOfficeManagerForm();
    }
  }

  onSubmitFrontOfficeStaff() {
    if (this.newFrontOfficeStaff.username && this.newFrontOfficeStaff.email) {
      this.frontOfficeStaffData.push({ ...this.newFrontOfficeStaff });
      this.resetFrontOfficeStaffForm();
    }
  }

  resetManagerForm() {
    this.newManager = { username: '', password: '', firstName: '', address: '', email: '', phoneNumber: '' };
  }

  resetFrontOfficeManagerForm() {
    this.newFrontOfficeManager = { username: '', password: '', firstName: '', address: '', email: '', phoneNumber: '' };
  }

  resetFrontOfficeStaffForm() {
    this.newFrontOfficeStaff = { username: '', password: '', firstName: '', address: '', email: '', phoneNumber: '' };
  }}