import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimgatosComponent } from './alimgatos.component';

describe('AlimgatosComponent', () => {
  let component: AlimgatosComponent;
  let fixture: ComponentFixture<AlimgatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimgatosComponent]
    });
    fixture = TestBed.createComponent(AlimgatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
