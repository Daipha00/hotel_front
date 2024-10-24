import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffGuestComponent } from './staff-guest.component';

describe('StaffGuestComponent', () => {
  let component: StaffGuestComponent;
  let fixture: ComponentFixture<StaffGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffGuestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
