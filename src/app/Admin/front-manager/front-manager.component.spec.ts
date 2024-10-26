import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontManagerComponent } from './front-manager.component';

describe('FrontManagerComponent', () => {
  let component: FrontManagerComponent;
  let fixture: ComponentFixture<FrontManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontManagerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
