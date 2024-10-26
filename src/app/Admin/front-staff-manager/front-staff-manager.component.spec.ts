import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontStaffManagerComponent } from './front-staff-manager.component';

describe('FrontStaffManagerComponent', () => {
  let component: FrontStaffManagerComponent;
  let fixture: ComponentFixture<FrontStaffManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontStaffManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontStaffManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
