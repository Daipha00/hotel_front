import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-roombooking-form',
  templateUrl: './roombooking-form.component.html',
  styleUrl: './roombooking-form.component.css'
})
export class RoombookingFormComponent {

  bookingForm: FormGroup;
  selectedDay: any = {};
  
  // Data for table
  days = [
    { day: 'Monday', price: 600000, advance: 300000 },
    { day: 'Tuesday', price: 600000, advance: 300000 },
    { day: 'Wednesday', price: 600000, advance: 300000 },
    { day: 'Thursday', price: 600000, advance: 300000 },
    { day: 'Friday', price: 600000, advance: 300000 },
    { day: 'Saturday', price: 700000, advance: 400000 },
    { day: 'Sunday', price: 600000, advance: 300000 },
  ];

  displayedColumns: string[] = ['day', 'price', 'advance'];

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      eventDate: ['', Validators.required],
      payment: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
      // Handle form submission logic here
    }
  }

}
