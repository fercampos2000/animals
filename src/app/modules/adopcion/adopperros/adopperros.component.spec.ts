import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopperrosComponent } from './adopperros.component';

describe('AdopperrosComponent', () => {
  let component: AdopperrosComponent;
  let fixture: ComponentFixture<AdopperrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopperrosComponent]
    });
    fixture = TestBed.createComponent(AdopperrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
