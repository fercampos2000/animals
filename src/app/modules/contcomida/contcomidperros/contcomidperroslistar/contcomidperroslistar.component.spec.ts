import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcomidperroslistarComponent } from './contcomidperroslistar.component';

describe('ContcomidperroslistarComponent', () => {
  let component: ContcomidperroslistarComponent;
  let fixture: ComponentFixture<ContcomidperroslistarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContcomidperroslistarComponent]
    });
    fixture = TestBed.createComponent(ContcomidperroslistarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
