import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgatosagregarComponent } from './rgatosagregar.component';

describe('RgatosagregarComponent', () => {
  let component: RgatosagregarComponent;
  let fixture: ComponentFixture<RgatosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RgatosagregarComponent]
    });
    fixture = TestBed.createComponent(RgatosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
