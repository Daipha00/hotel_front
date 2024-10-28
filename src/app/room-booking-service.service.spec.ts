import { TestBed } from '@angular/core/testing';

import { RoomBookingServiceService } from './room-booking-service.service';

describe('RoomBookingServiceService', () => {
  let service: RoomBookingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomBookingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
