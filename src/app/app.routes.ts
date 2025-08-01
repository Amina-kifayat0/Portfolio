import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { DocsComponent } from './docs/docs.component';

export const routes: Routes = [
   { path: '', component: HomeComponent },
     { path: 'projects', component: ProjectsComponent },
     { path: 'docs', component: DocsComponent },
    { path: '**', redirectTo: '' } //
];
