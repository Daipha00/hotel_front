import { TestBed } from '@angular/core/testing';

import { HotelManagerService } from './hotel-manager.service';

describe('HotelManagerService', () => {
  let service: HotelManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
