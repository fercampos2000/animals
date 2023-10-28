import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimperrosComponent } from './alimperros.component';

describe('AlimperrosComponent', () => {
  let component: AlimperrosComponent;
  let fixture: ComponentFixture<AlimperrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlimperrosComponent]
    });
    fixture = TestBed.createComponent(AlimperrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
