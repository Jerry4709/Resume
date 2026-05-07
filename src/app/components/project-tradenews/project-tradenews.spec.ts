import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTradenews } from './project-tradenews';

describe('ProjectTradenews', () => {
  let component: ProjectTradenews;
  let fixture: ComponentFixture<ProjectTradenews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTradenews],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTradenews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
