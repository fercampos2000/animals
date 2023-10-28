import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvoluntariosagregarComponent } from './rvoluntariosagregar.component';

describe('RvoluntariosagregarComponent', () => {
  let component: RvoluntariosagregarComponent;
  let fixture: ComponentFixture<RvoluntariosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RvoluntariosagregarComponent]
    });
    fixture = TestBed.createComponent(RvoluntariosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
