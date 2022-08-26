import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAddItemComponent } from './education-add-item.component';

describe('EducationAddItemComponent', () => {
  let component: EducationAddItemComponent;
  let fixture: ComponentFixture<EducationAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationAddItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
