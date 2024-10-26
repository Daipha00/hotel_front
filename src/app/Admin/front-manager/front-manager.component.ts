import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FrontOfficeManagerService } from '../user-management/front-office-manager.service';
import { HotelManager } from '../user-management/hotel-manager.model';
import { HotelManagerService } from '../user-management/hotel-manager.service';
import { User } from '../user-management/user.model';
import { FrontOfficerManager } from './front-officer-manager.model';

@Component({
  selector: 'app-front-manager',
  templateUrl: './front-manager.component.html',
  styleUrl: './front-manager.component.css'
})
export class FrontManagerComponent implements OnInit{
toggleSidebar() {
throw new Error('Method not implemented.');
}
  isSidebarOpen = false;
  frontOfficeManagers: FrontOfficerManager[] = [];
  newFrontOfficerManager: FrontOfficerManager = {} as FrontOfficerManager;

  constructor(private frontOfficeManagerService: FrontOfficeManagerService) {}

  ngOnInit(): void {
    this.loadFrontOfficeManagers();
  }

  loadFrontOfficeManagers(): void {
    this.frontOfficeManagerService.getAllFrontOfficeManagers().subscribe(
      (data) => {
        this.frontOfficeManagers = data;
      },
      (error) => {
        console.error('Failed to load front office managers:', error);
      }
    );
  }

  addFrontOfficerManager(): void {
    this.frontOfficeManagerService.registerNewFrontManager(this.newFrontOfficerManager).subscribe(
      (response) => {
        this.loadFrontOfficeManagers(); // Reload the list after adding
        this.newFrontOfficerManager = {} as FrontOfficerManager; // Reset the form
      },
      (error) => {
        console.error('Failed to add front officer manager:', error);
      }
    );
  }

  editFrontOfficerManager(manager: FrontOfficerManager): void {
    this.newFrontOfficerManager = { ...manager }; // Populate the form with the manager's data for editing
  }

  deleteFrontOfficerManager(id: number): void {
    this.frontOfficeManagerService.deleteFrontOfficeManager(id).subscribe(
      () => {
        this.loadFrontOfficeManagers(); // Reload the list after deleting
      },
      (error) => {
        console.error('Failed to delete front officer manager:', error);
      }
    );
  }
}