import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrl: './venue.component.css'
})
export class VenueComponent {
// venueBookingForm: FormGroup<any>;
// onSubmit() {
// throw new Error('Method not implemented.');
// }
  venueBookingForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.venueBookingForm = this.fb.group({
      venueType: ['', Validators.required],
      date: ['', Validators.required],
      guests: ['', [Validators.required, Validators.min(1)]],
      specialRequests: ['']
    });
  }

  onSubmit(): void {
    if (this.venueBookingForm.valid) {
      console.log('Form Submitted', this.venueBookingForm.value);
      // Add your booking submission logic here
    }
  }

}
