import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgatoseditarComponent } from './rgatoseditar.component';

describe('RgatoseditarComponent', () => {
  let component: RgatoseditarComponent;
  let fixture: ComponentFixture<RgatoseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RgatoseditarComponent]
    });
    fixture = TestBed.createComponent(RgatoseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
