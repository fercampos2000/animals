import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContcomidperrosComponent } from './contcomidperros.component';

describe('ContcomidperrosComponent', () => {
  let component: ContcomidperrosComponent;
  let fixture: ComponentFixture<ContcomidperrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContcomidperrosComponent]
    });
    fixture = TestBed.createComponent(ContcomidperrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
