import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEditionComponent } from './navbar-edition.component';

describe('NavbarEditionComponent', () => {
  let component: NavbarEditionComponent;
  let fixture: ComponentFixture<NavbarEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
