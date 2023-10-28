import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmedicosgatosComponent } from './rmedicosgatos.component';

describe('RmedicosgatosComponent', () => {
  let component: RmedicosgatosComponent;
  let fixture: ComponentFixture<RmedicosgatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmedicosgatosComponent]
    });
    fixture = TestBed.createComponent(RmedicosgatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
