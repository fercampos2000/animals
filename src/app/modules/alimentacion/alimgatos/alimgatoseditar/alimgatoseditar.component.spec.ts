import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimgatoseditarComponent } from './alimgatoseditar.component';

describe('AlimgatoseditarComponent', () => {
  let component: AlimgatoseditarComponent;
  let fixture: ComponentFixture<AlimgatoseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimgatoseditarComponent]
    });
    fixture = TestBed.createComponent(AlimgatoseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
