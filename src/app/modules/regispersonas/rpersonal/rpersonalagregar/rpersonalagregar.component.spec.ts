import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpersonalagregarComponent } from './rpersonalagregar.component';

describe('RpersonalagregarComponent', () => {
  let component: RpersonalagregarComponent;
  let fixture: ComponentFixture<RpersonalagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RpersonalagregarComponent]
    });
    fixture = TestBed.createComponent(RpersonalagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
