import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffProcessingComponent } from './staff-processing.component';

describe('StaffProcessingComponent', () => {
  let component: StaffProcessingComponent;
  let fixture: ComponentFixture<StaffProcessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StaffProcessingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffProcessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
