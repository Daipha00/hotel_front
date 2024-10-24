import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerStaffManagementComponent } from './manager-staff-management.component';

describe('ManagerStaffManagementComponent', () => {
  let component: ManagerStaffManagementComponent;
  let fixture: ComponentFixture<ManagerStaffManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerStaffManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerStaffManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
