import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTeamup } from './project-teamup';

describe('ProjectTeamup', () => {
  let component: ProjectTeamup;
  let fixture: ComponentFixture<ProjectTeamup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTeamup],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTeamup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
