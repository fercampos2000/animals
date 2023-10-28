import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RperroseditarComponent } from './rperroseditar.component';

describe('RperroseditarComponent', () => {
  let component: RperroseditarComponent;
  let fixture: ComponentFixture<RperroseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RperroseditarComponent]
    });
    fixture = TestBed.createComponent(RperroseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
