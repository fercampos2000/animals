import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcomidperroseditarComponent } from './contcomidperroseditar.component';

describe('ContcomidperroseditarComponent', () => {
  let component: ContcomidperroseditarComponent;
  let fixture: ComponentFixture<ContcomidperroseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContcomidperroseditarComponent]
    });
    fixture = TestBed.createComponent(ContcomidperroseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
