import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmedicosperroseditarComponent } from './rmedicosperroseditar.component';

describe('RmedicosperroseditarComponent', () => {
  let component: RmedicosperroseditarComponent;
  let fixture: ComponentFixture<RmedicosperroseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmedicosperroseditarComponent]
    });
    fixture = TestBed.createComponent(RmedicosperroseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
