import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmedicosgatoseditarComponent } from './rmedicosgatoseditar.component';

describe('RmedicosgatoseditarComponent', () => {
  let component: RmedicosgatoseditarComponent;
  let fixture: ComponentFixture<RmedicosgatoseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmedicosgatoseditarComponent]
    });
    fixture = TestBed.createComponent(RmedicosgatoseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
