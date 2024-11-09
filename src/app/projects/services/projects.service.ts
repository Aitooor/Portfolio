// src/app/projects/services/projects.service.ts
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  position?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Ignis',
      description: 'CEO of Hispanic Minecraft server(not affiliated with Microsoft/Mojang).',
      image: 'assets/images/project1.jpg',
      technologies: ['Java', 'Minecraft', 'SpigotAPI', 'PapermcAPI', 'VelocityAPI'],
      position: ['CEO', 'Developer', 'Configurator']
    },
    {
      id: 2,
      title: 'Nasgar',
      description: 'CEO of Multi language Minecraft server(not affiliated with Microsoft/Mojang).',
      image: 'assets/images/project1.jpg',
      technologies: ['Java', 'Minecraft', 'SpigotAPI', 'PapermcAPI', 'VelocityAPI'],
      position: ['CEO', 'Developer', 'Configurator']
    },
    {
      id: 3,
      title: 'This Portafolio',
      description: 'Simple Front-end to see my Back-end proyects.',
      image: 'assets/images/project1.jpg',
      technologies: ['HTML', 'CSS', 'TypeScript', 'Angular'],
      position: ['Developer', 'Designer']
    },
  ];

  getProjects(startIndex: number, limit: number): Observable<Project[]> {
    const projectsToReturn = this.projects.slice(startIndex, startIndex + limit);
    return of(projectsToReturn).pipe(delay(500)); // Simulate network delay
  }
}
