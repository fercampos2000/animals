import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RperrosComponent } from './rperros.component';

describe('RperrosComponent', () => {
  let component: RperrosComponent;
  let fixture: ComponentFixture<RperrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RperrosComponent]
    });
    fixture = TestBed.createComponent(RperrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
