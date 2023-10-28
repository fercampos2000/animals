import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimgatosmostrarComponent } from './alimgatosmostrar.component';

describe('AlimgatosmostrarComponent', () => {
  let component: AlimgatosmostrarComponent;
  let fixture: ComponentFixture<AlimgatosmostrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimgatosmostrarComponent]
    });
    fixture = TestBed.createComponent(AlimgatosmostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
