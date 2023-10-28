import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimperrosagregarComponent } from './alimperrosagregar.component';

describe('AlimperrosagregarComponent', () => {
  let component: AlimperrosagregarComponent;
  let fixture: ComponentFixture<AlimperrosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimperrosagregarComponent]
    });
    fixture = TestBed.createComponent(AlimperrosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
