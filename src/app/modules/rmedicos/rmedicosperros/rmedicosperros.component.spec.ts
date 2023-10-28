import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmedicosperrosComponent } from './rmedicosperros.component';

describe('RmedicosperrosComponent', () => {
  let component: RmedicosperrosComponent;
  let fixture: ComponentFixture<RmedicosperrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmedicosperrosComponent]
    });
    fixture = TestBed.createComponent(RmedicosperrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
