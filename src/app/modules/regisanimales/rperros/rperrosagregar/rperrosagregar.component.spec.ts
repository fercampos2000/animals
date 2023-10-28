import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RperrosagregarComponent } from './rperrosagregar.component';

describe('RperrosagregarComponent', () => {
  let component: RperrosagregarComponent;
  let fixture: ComponentFixture<RperrosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RperrosagregarComponent]
    });
    fixture = TestBed.createComponent(RperrosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
