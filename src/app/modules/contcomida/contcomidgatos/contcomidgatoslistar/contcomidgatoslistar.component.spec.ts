import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcomidgatoslistarComponent } from './contcomidgatoslistar.component';

describe('ContcomidgatoslistarComponent', () => {
  let component: ContcomidgatoslistarComponent;
  let fixture: ComponentFixture<ContcomidgatoslistarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContcomidgatoslistarComponent]
    });
    fixture = TestBed.createComponent(ContcomidgatoslistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
