import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuebookingComponent } from './venuebooking.component';

describe('VenuebookingComponent', () => {
  let component: VenuebookingComponent;
  let fixture: ComponentFixture<VenuebookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VenuebookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenuebookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
