import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpersonaleditarComponent } from './rpersonaleditar.component';

describe('RpersonaleditarComponent', () => {
  let component: RpersonaleditarComponent;
  let fixture: ComponentFixture<RpersonaleditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RpersonaleditarComponent]
    });
    fixture = TestBed.createComponent(RpersonaleditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
