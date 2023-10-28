import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuinitComponent } from './menuinit.component';

describe('MenuinitComponent', () => {
  let component: MenuinitComponent;
  let fixture: ComponentFixture<MenuinitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuinitComponent]
    });
    fixture = TestBed.createComponent(MenuinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
