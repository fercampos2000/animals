import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimgatosagregarComponent } from './alimgatosagregar.component';

describe('AlimgatosagregarComponent', () => {
  let component: AlimgatosagregarComponent;
  let fixture: ComponentFixture<AlimgatosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimgatosagregarComponent]
    });
    fixture = TestBed.createComponent(AlimgatosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
