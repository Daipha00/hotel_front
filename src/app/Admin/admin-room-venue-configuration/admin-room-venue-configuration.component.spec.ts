import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRoomVenueConfigurationComponent } from './admin-room-venue-configuration.component';

describe('AdminRoomVenueConfigurationComponent', () => {
  let component: AdminRoomVenueConfigurationComponent;
  let fixture: ComponentFixture<AdminRoomVenueConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminRoomVenueConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminRoomVenueConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
