import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgatosComponent } from './rgatos.component';

describe('RgatosComponent', () => {
  let component: RgatosComponent;
  let fixture: ComponentFixture<RgatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RgatosComponent]
    });
    fixture = TestBed.createComponent(RgatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
