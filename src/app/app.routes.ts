import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: MainPageComponent }, // Main page
  { path: '**', component: MainPageComponent } // Wildcard route for a 404 page
];
