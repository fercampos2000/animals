import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcomidgatoseditarComponent } from './contcomidgatoseditar.component';

describe('ContcomidgatoseditarComponent', () => {
  let component: ContcomidgatoseditarComponent;
  let fixture: ComponentFixture<ContcomidgatoseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContcomidgatoseditarComponent]
    });
    fixture = TestBed.createComponent(ContcomidgatoseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
