import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimperrosmostrarComponent } from './alimperrosmostrar.component';

describe('AlimperrosmostrarComponent', () => {
  let component: AlimperrosmostrarComponent;
  let fixture: ComponentFixture<AlimperrosmostrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimperrosmostrarComponent]
    });
    fixture = TestBed.createComponent(AlimperrosmostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
