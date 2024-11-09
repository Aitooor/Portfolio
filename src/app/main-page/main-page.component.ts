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

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }

  viewProject(id: number) {
    // Logic to view project details
  }
}
