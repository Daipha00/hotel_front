import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  countries: any[] = []; // Array to hold the list of countries

  constructor(private http: HttpClient, private router: Router) {
    this.registrationForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      userPassword: new FormControl('', Validators.required),
      userFirstName: new FormControl('', Validators.required),
      userLastName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required), // Add country control,
      city: new FormControl('', Validators.required),
      zipcode:new FormControl('',Validators.required)

    });
  }

  ngOnInit(): void {
    this.fetchCountries(); // Fetch countries on component initialization
  }

  fetchCountries(): void {
    this.http.get('https://restcountries.com/v3.1/all') // Fetch countries from the API
      .subscribe((data: any) => {
        this.countries = data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2 // You can use cca2 or cca3 for country codes
        }));
      });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.http.post('http://localhost:9090/client', this.registrationForm.value)
        .subscribe({
          next: (response) => {
            console.log('Registration successful', response);
            this.router.navigate(['/login']);
          },
          error: (error) => {
            console.error('There was an error during registration!', error);
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }
}