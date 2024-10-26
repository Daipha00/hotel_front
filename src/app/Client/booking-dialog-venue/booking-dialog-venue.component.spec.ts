import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDialogVenueComponent } from './booking-dialog-venue.component';

describe('BookingDialogVenueComponent', () => {
  let component: BookingDialogVenueComponent;
  let fixture: ComponentFixture<BookingDialogVenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDialogVenueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDialogVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
