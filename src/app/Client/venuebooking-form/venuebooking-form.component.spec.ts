import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuebookingFormComponent } from './venuebooking-form.component';

describe('VenuebookingFormComponent', () => {
  let component: VenuebookingFormComponent;
  let fixture: ComponentFixture<VenuebookingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VenuebookingFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenuebookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
