import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmedicosperrosagregarComponent } from './rmedicosperrosagregar.component';

describe('RmedicosperrosagregarComponent', () => {
  let component: RmedicosperrosagregarComponent;
  let fixture: ComponentFixture<RmedicosperrosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmedicosperrosagregarComponent]
    });
    fixture = TestBed.createComponent(RmedicosperrosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
