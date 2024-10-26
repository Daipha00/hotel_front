import { TestBed } from '@angular/core/testing';

import { VenueBookingServiceService } from './venue-booking-service.service';

describe('VenueBookingServiceService', () => {
  let service: VenueBookingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VenueBookingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
