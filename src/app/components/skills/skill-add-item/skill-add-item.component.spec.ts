import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillAddItemComponent } from './skill-add-item.component';

describe('SkillAddItemComponent', () => {
  let component: SkillAddItemComponent;
  let fixture: ComponentFixture<SkillAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillAddItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
