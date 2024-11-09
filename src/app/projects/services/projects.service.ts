import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  getProjects(): Observable<Project[]> {
    // Mock data for demonstration
    return of([
      { id: 1, title: 'Ignis', description: 'CEO of Hispanic Minecraft server(not affiliated with Microsoft/Mojang).', image: 'assets/images/project1.jpg' },
      { id: 2, title: 'Nasgar', description: 'CEO of Multi language Minecraft server(not affiliated with Microsoft/Mojang).', image: 'assets/images/project1.jpg' },
      { id: 3, title: 'Project Three', description: 'Description for project three.', image: 'assets/images/project1.jpg' },
      { id: 4, title: 'Project Fourth', description: 'Description for project four.', image: 'assets/images/project1.jpg' },
      { id: 5, title: 'Project Five', description: 'Description for project five.', image: 'assets/images/project1.jpg' },
    ]);
  }
}
