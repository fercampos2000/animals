import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmedicosgatosagregarComponent } from './rmedicosgatosagregar.component';

describe('RmedicosgatosagregarComponent', () => {
  let component: RmedicosgatosagregarComponent;
  let fixture: ComponentFixture<RmedicosgatosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmedicosgatosagregarComponent]
    });
    fixture = TestBed.createComponent(RmedicosgatosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
