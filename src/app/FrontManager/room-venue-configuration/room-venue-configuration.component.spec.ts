import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomVenueConfigurationComponent } from './room-venue-configuration.component';

describe('RoomVenueConfigurationComponent', () => {
  let component: RoomVenueConfigurationComponent;
  let fixture: ComponentFixture<RoomVenueConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomVenueConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomVenueConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
