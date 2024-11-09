// src/app/projects/services/projects.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    { id: 1, title: 'Ignis', description: 'CEO of Hispanic Minecraft server(not affiliated with Microsoft/Mojang).', image: 'assets/images/project1.jpg' },
    { id: 2, title: 'Nasgar', description: 'CEO of Multi language Minecraft server(not affiliated with Microsoft/Mojang).', image: 'assets/images/project1.jpg' },
    { id: 3, title: 'Project Three', description: 'Description for project three.', image: 'assets/images/project1.jpg' },
    { id: 4, title: 'Project Fourth', description: 'Description for project four.', image: 'assets/images/project1.jpg' },
    { id: 5, title: 'Project Five', description: 'Description for project five.', image: 'assets/images/project1.jpg' },
    { id: 6, title: 'Project Six', description: 'Description for project six.', image: 'assets/images/project1.jpg' },
    { id: 7, title: 'Project Seven', description: 'Description for project seven.', image: 'assets/images/project1.jpg' },
    { id: 8, title: 'Project Eight', description: 'Description for project eight.', image: 'assets/images/project1.jpg' },
    { id: 9, title: 'Project Nine', description: 'Description for project nine.', image: 'assets/images/project1.jpg' },
    { id: 10, title: 'Project Ten', description: 'Description for project ten.', image: 'assets/images/project1.jpg' },
    // Add more projects as needed
  ];

  getProjects(startIndex: number, limit: number): Observable<Project[]> {
    const projectsToReturn = this.projects.slice(startIndex, startIndex + limit);
    return of(projectsToReturn).pipe(delay(500)); // Simulate network delay
  }
}
