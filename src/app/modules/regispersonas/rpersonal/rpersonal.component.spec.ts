import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpersonalComponent } from './rpersonal.component';

describe('RpersonalComponent', () => {
  let component: RpersonalComponent;
  let fixture: ComponentFixture<RpersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RpersonalComponent]
    });
    fixture = TestBed.createComponent(RpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
