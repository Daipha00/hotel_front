import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombookindComponent } from './roombookind.component';

describe('RoombookindComponent', () => {
  let component: RoombookindComponent;
  let fixture: ComponentFixture<RoombookindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoombookindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoombookindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
