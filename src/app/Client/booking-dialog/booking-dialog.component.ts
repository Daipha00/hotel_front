// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';

// @Component({
//   selector: 'app-booking-dialog',
//   templateUrl: './booking-dialog.component.html',
//   styleUrl: './booking-dialog.component.css'
// })
// export class BookingDialogComponent implements OnInit {
//   bookingForm: FormGroup | undefined;
// selectedDay: any;
//   any: any;

//   constructor(
//     private fb: FormBuilder,
//     private dialogRef: MatDialogRef<BookingDialogComponent>
//   ) {}

//   ngOnInit(): void {
//     this.bookingForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       eventDate: ['', Validators.required],
//       payment: ['', Validators.required]
//     });
//   }

//   onSubmit() {
//     if (this.any.valid) {
//       // Handle the form submission
//       console.log(this.any.value);
//       this.dialogRef.close(); // Close the dialog on successful form submission
//     }
//   }
// }



import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
})
export class BookingDialogComponent {
  bookingForm: FormGroup;

  selectedDay = {
    advance: 50000,
    price: 150000,
  };
  bookingService: any;


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.bookingForm = this.fb.group({
 
      eventDate: ['', Validators.required],
      payment: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const selectedDate = this.bookingForm.value.eventDate;
      const selectedTime = this.bookingForm.value.eventTime;

      // Combine date and time if needed
      const fullDateTime = new Date(`${selectedDate}T${selectedTime}`);

      this.bookingService.checkAvailability(fullDateTime.toISOString()).subscribe(
        (isAvailable: any) => {
          if (isAvailable) {
            console.log('Booking successful', this.bookingForm.value);
            this.dialogRef.close(this.bookingForm.value); // Close the dialog with form values
          } else {
            alert('The room is not available on this date.');
          }
        },
        (error: any) => {
          console.error('Error checking availability', error);
          alert('An error occurred while checking availability. Please try again.');
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }



  

}
