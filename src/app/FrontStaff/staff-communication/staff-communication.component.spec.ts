import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCommunicationComponent } from './staff-communication.component';

describe('StaffCommunicationComponent', () => {
  let component: StaffCommunicationComponent;
  let fixture: ComponentFixture<StaffCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
