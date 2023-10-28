import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimperroseditarComponent } from './alimperroseditar.component';

describe('AlimperroseditarComponent', () => {
  let component: AlimperroseditarComponent;
  let fixture: ComponentFixture<AlimperroseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimperroseditarComponent]
    });
    fixture = TestBed.createComponent(AlimperroseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
