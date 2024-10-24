import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOparationComponent } from './manage-oparation.component';

describe('ManageOparationComponent', () => {
  let component: ManageOparationComponent;
  let fixture: ComponentFixture<ManageOparationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageOparationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageOparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
