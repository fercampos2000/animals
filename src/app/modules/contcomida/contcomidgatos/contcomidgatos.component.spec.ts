import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcomidgatosComponent } from './contcomidgatos.component';

describe('ContcomidgatosComponent', () => {
  let component: ContcomidgatosComponent;
  let fixture: ComponentFixture<ContcomidgatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContcomidgatosComponent]
    });
    fixture = TestBed.createComponent(ContcomidgatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
