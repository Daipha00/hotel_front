import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCheckinOutComponent } from './staff-checkin-out.component';

describe('StaffCheckinOutComponent', () => {
  let component: StaffCheckinOutComponent;
  let fixture: ComponentFixture<StaffCheckinOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffCheckinOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffCheckinOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
