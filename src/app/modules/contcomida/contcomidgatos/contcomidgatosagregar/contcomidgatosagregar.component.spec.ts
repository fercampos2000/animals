import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcomidgatosagregarComponent } from './contcomidgatosagregar.component';

describe('ContcomidgatosagregarComponent', () => {
  let component: ContcomidgatosagregarComponent;
  let fixture: ComponentFixture<ContcomidgatosagregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContcomidgatosagregarComponent]
    });
    fixture = TestBed.createComponent(ContcomidgatosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
