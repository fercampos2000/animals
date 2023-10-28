import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcomidperrosagregarComponent } from './contcomidperrosagregar.component';

describe('ContcomidperrosagregarComponent', () => {
  let component: ContcomidperrosagregarComponent;
  let fixture: ComponentFixture<ContcomidperrosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContcomidperrosagregarComponent]
    });
    fixture = TestBed.createComponent(ContcomidperrosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
