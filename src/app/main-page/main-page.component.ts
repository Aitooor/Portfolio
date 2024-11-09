// src/app/main-page/main-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService, Project } from '../projects/services/projects.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  projects: Project[] = [];
  startIndex = 0;
  limit = 5;

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projectService.getProjects(this.startIndex, this.limit).subscribe((projects) => {
      this.projects = projects;
    });
  }

  viewProject(id: number) {
    console.log(`Viewing project with ID: ${id}`);
  }
}
