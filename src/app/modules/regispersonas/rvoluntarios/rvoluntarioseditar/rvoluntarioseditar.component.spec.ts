import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvoluntarioseditarComponent } from './rvoluntarioseditar.component';

describe('RvoluntarioseditarComponent', () => {
  let component: RvoluntarioseditarComponent;
  let fixture: ComponentFixture<RvoluntarioseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RvoluntarioseditarComponent]
    });
    fixture = TestBed.createComponent(RvoluntarioseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
