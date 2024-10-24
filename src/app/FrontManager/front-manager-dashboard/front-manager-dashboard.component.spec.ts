import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontManagerDashboardComponent } from './front-manager-dashboard.component';

describe('FrontManagerDashboardComponent', () => {
  let component: FrontManagerDashboardComponent;
  let fixture: ComponentFixture<FrontManagerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontManagerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
