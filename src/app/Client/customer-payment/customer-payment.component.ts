import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css'],
})
export class CustomerPaymentComponent {
  paymentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with validators
    this.paymentForm = this.fb.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1000)]],
    });
  }

  // Function to handle form submission
  onSubmit() {
    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value;
      console.log('Payment Data:', paymentData);
      // TODO: Integrate with Zan Malipo API to process the payment
    } else {
      console.log('Payment form is invalid');
    }
  }
}
