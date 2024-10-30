import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoerComponent } from './custoer.component';

describe('CustoerComponent', () => {
  let component: CustoerComponent;
  let fixture: ComponentFixture<CustoerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustoerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
