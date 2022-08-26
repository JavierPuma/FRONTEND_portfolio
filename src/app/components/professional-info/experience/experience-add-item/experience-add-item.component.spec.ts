import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAddItemComponent } from './experience-add-item.component';

describe('ExperienceAddItemComponent', () => {
  let component: ExperienceAddItemComponent;
  let fixture: ComponentFixture<ExperienceAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceAddItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
