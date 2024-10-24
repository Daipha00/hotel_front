import { TestBed } from '@angular/core/testing';

import { BookingService } from './booking.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { constructor } from 'assert';

describe('BookingService', () => {
  let service: BookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingService);
  });

  it('should be created', () => {
    bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private BookingService: BookingService) {
    this.bookingForm = this.fb.group({
      check_out: ['', Validators.required],
      check_out: ['', Validators.required],
      arrival_time: ['', [Validators.required, Validators.email]],
      special_request: ['', Validators.required],
      status: ['', Validators.required],
      
    });
  }
 
  onSubmit() {
    if (this.bookingForm.valid) {
      this.bookingService.bookEvent(this.bookingForm.value).subscribe(
        response => {
          console.log('Booking successful', response);
          // Handle successful booking (e.g., show a success message)
        },
        error => {
          console.error('Booking failed', error);
          // Handle error (e.g., show an error message)
        }
      );
    } else {
      console.log('Form is invalid');
      // Handle form validation errors
    }
  }
    expect(service).toBeTruthy();
  });
});
