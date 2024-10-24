import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombookingFormComponent } from './roombooking-form.component';

describe('RoombookingFormComponent', () => {
  let component: RoombookingFormComponent;
  let fixture: ComponentFixture<RoombookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoombookingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoombookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
