import { Component, OnInit } from '@angular/core';
import { User } from '../user-management/user.model';
import { FrontOfficeStaff } from './front-office-staff.model';
import { MatTableDataSource } from '@angular/material/table';
import { FrontOfficeStaffService } from './front-office-staff.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-front-staff-manager',
  templateUrl: './front-staff-manager.component.html',
  styleUrl: './front-staff-manager.component.css'
})
export class FrontStaffManagerComponent implements OnInit{
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  frontOfficeStaffData = new MatTableDataSource<FrontOfficeStaff>();
  frontOfficeStaffDisplayedColumns: string[] = ['username', 'email', 'phoneNumber', 'actions'];
  newFrontOfficeStaff: FrontOfficeStaff = this.resetNewStaff();
  editMode = false;

  constructor(private frontOfficeStaffService: FrontOfficeStaffService) {}

  ngOnInit(): void {
    this.loadFrontOfficeStaff();
  }

  loadFrontOfficeStaff(): void {
    this.frontOfficeStaffService.getAllFrontOfficeStaff().subscribe(data => {
      this.frontOfficeStaffData.data = data;
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.editMode) {
        this.frontOfficeStaffService.updateFrontOfficeStaff(this.newFrontOfficeStaff.id, this.newFrontOfficeStaff).subscribe(() => {
          this.loadFrontOfficeStaff();
          this.resetForm(form);
        });
      } else {
        this.frontOfficeStaffService.saveOrUpdateFrontOfficeStaff(this.newFrontOfficeStaff).subscribe(() => {
          this.loadFrontOfficeStaff();
          this.resetForm(form);
        });
      }
    }
  }

  onEdit(staff: FrontOfficeStaff): void {
    this.newFrontOfficeStaff = { ...staff }; // Copy staff data to the form model
    this.editMode = true;
  }

  onDelete(id: number): void {
    this.frontOfficeStaffService.deleteFrontOfficeStaff(id).subscribe(() => {
      this.loadFrontOfficeStaff();
    });
  }

  cancelEdit(): void {
    this.newFrontOfficeStaff = this.resetNewStaff();
    this.editMode = false;
  }

  resetForm(form: NgForm): void {
    form.resetForm();
    this.newFrontOfficeStaff = this.resetNewStaff();
    this.editMode = false;
  }

  resetNewStaff(): FrontOfficeStaff {
    return {
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
}
