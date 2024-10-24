import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffReservationComponent } from './staff-reservation.component';

describe('StaffReservationComponent', () => {
  let component: StaffReservationComponent;
  let fixture: ComponentFixture<StaffReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
