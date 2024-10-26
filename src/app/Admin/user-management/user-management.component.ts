import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HotelManager } from './hotel-manager.model';
import { MatTableDataSource } from '@angular/material/table';
import { HotelManagerService } from './hotel-manager.service';
import { FrontOfficeManagerService } from './front-office-manager.service';
import { FrontOfficeManager } from './front-office-manager.model';

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
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit{
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  hotelManagers: HotelManager[] = [];
  frontOfficeManagers: FrontOfficeManager[] = [];

  newManager: HotelManager = {
    id: 0,
    userName: '',
    userPassword: '',
    userFirstName: '',
    userLastName: '',
    address: '',
    email: '',
    phoneNumber: ''
  };

  newFrontOfficeManager: FrontOfficeManager = {
    id: 0,
    userName: '',
    userPassword: '',
    userFirstName: '',
    userLastName: '',
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

  managerData: MatTableDataSource<HotelManager> = new MatTableDataSource<HotelManager>();
  displayedColumns: string[] = ['username', 'email', 'phoneNumber', 'actions'];
  
  frontManagerData: MatTableDataSource<FrontOfficeManager> = new MatTableDataSource<FrontOfficeManager>();
  frontOfficeDisplayedColumns: string[] = ['username', 'email', 'phoneNumber'];


  frontOfficeManagerData: User[] = [];
  frontOfficeStaffData: User[] = [];

  frontOfficeStaffDisplayedColumns: string[] = ['username', 'email', 'phoneNumber'];

  constructor(private hotelManagerService: HotelManagerService,private frontOfficeManagerService: FrontOfficeManagerService) {}

  ngOnInit(): void {
    this.loadManagers();
    this.loadFrontOfficeManagers();
  }

  // Method to submit new manager
  onSubmitManager(): void {
    this.hotelManagerService.registerManager(this.newManager).subscribe({
      next: () => {
        this.loadManagers(); // Reload the manager list after adding a new manager
        this.resetForm(); // Reset the form
      },
      error: (error: any) => {
        console.error('Error adding manager', error);
      }
    });
  }

  // Handle Edit/Update
  onEditManager(manager: any) {
    this.newManager = { ...manager }; // Copy manager data into the form model
  }

  onDeleteManager(id: number) {
    this.hotelManagerService.deleteHotelManager(id).subscribe({
      next: () => {
        // Update the UI after successful deletion
        this.managerData.data = this.managerData.data.filter(manager => manager.id !== id);
      },
      error: (err) => console.error('Error deleting manager: ', err)
    });
  }

  onSubmitFrontOfficeManager() {
    this.frontOfficeManagerService.registerNewFrontManager(this.newManager).subscribe({
      next: () => {
        this.loadFrontOfficeManagers(); // Reload the manager list after adding a new manager
        this.resetForm(); // Reset the form
      },
      error: (error: any) => {
        console.error('Error adding manager', error);
      }
    });
  }

  onSubmitFrontOfficeStaff() {
    if (this.newFrontOfficeStaff.username && this.newFrontOfficeStaff.email) {
      this.frontOfficeStaffData.push({ ...this.newFrontOfficeStaff });
      this.resetFrontOfficeStaffForm();
    }
  }

  // Method to reset form after successful submission
  resetForm(): void {
    this.newManager = {
      id: 0,
      userName: '',
      userPassword: '',
      userFirstName: '',
      userLastName: '',
      address: '',
      email: '',
      phoneNumber: ''
    };
  }

  resetFrontOfficeManagerForm() {
    this.newFrontOfficeManager = { id: 0,
      userName: '',
      userPassword: '',
      userFirstName: '',
      userLastName: '',
      address: '',
      email: '',
      phoneNumber: ''
    };
  }

  resetFrontOfficeStaffForm() {
    this.newFrontOfficeStaff = { username: '', password: '', firstName: '', address: '', email: '', phoneNumber: '' };
  }

  // Method to load hotel managers
  loadManagers(): void {
    this.hotelManagerService.getAllHotelManagers().subscribe({
      next: (data: HotelManager[]) => {
        this.managerData = new MatTableDataSource(data);
      },
      error: (error: any) => {
        console.error('Error fetching managers', error);
      }
    });
  }
  loadFrontOfficeManagers(): void {
    this.frontOfficeManagerService.getAllFrontOfficeManagers().subscribe({
      next: (data: FrontOfficeManager[]) => {
        this.frontManagerData = new MatTableDataSource(data);
      },
      error: (error: any) => {
        console.error('Error fetching managers', error);
      }
    });
  }
}
