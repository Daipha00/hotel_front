import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontManagerNavComponent } from './front-manager-nav.component';

describe('FrontManagerNavComponent', () => {
  let component: FrontManagerNavComponent;
  let fixture: ComponentFixture<FrontManagerNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrontManagerNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrontManagerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
