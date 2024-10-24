import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerPaymentComponent } from './manager-payment.component';

describe('ManagerPaymentComponent', () => {
  let component: ManagerPaymentComponent;
  let fixture: ComponentFixture<ManagerPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManagerPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
