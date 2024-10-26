import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';

@Component({
  selector: 'app-booking-dialog-venue',
  templateUrl: './booking-dialog-venue.component.html',
  styleUrl: './booking-dialog-venue.component.css'
})
export class BookingDialogVenueComponent {
  bookingForm: FormGroup;

  selectedDay = {
    advance: 50000,
    price: 150000,
  };


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.bookingForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      eventDate: ['', Validators.required],
      payment: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
      this.dialogRef.close(this.bookingForm.value); // You can handle the form submission here
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  
  onTimeChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const timeValue = input.value; // This will be in HH:mm format
    const [hours, minutes] = timeValue.split(':');
    
    // Convert to 12-hour format
    const ampm = +hours >= 12 ? 'PM' : 'AM';
    const hours12 = (+hours % 12) || 12; // Convert to 12-hour format
    const formattedTime = `${hours12}:${minutes} ${ampm}`;
    
    console.log(formattedTime); // You can save this formatted time or use it as needed
  }
}

