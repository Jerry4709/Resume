import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { ProjectEprocurementComponent } from './components/project-eprocurement/project-eprocurement';
import { ProjectTeamupComponent } from './components/project-teamup/project-teamup';
import { ProjectTradenewsComponent } from './components/project-tradenews/project-tradenews';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'project-eprocurement', component: ProjectEprocurementComponent },
  { path: 'project-teamup', component: ProjectTeamupComponent },
  { path: 'project-tradenews', component: ProjectTradenewsComponent },
  { path: '**', redirectTo: '' }
];
