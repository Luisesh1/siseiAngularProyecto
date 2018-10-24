import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPage2Component } from './menu-page2.component';

describe('MenuPage2Component', () => {
  let component: MenuPage2Component;
  let fixture: ComponentFixture<MenuPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
