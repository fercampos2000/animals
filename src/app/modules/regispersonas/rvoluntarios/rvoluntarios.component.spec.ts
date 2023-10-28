import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvoluntariosComponent } from './rvoluntarios.component';

describe('RvoluntariosComponent', () => {
  let component: RvoluntariosComponent;
  let fixture: ComponentFixture<RvoluntariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RvoluntariosComponent]
    });
    fixture = TestBed.createComponent(RvoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
