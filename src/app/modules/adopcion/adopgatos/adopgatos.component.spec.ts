import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdopgatosComponent } from './adopgatos.component';

describe('AdopgatosComponent', () => {
  let component: AdopgatosComponent;
  let fixture: ComponentFixture<AdopgatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdopgatosComponent]
    });
    fixture = TestBed.createComponent(AdopgatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
