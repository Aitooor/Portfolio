import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectsService, Project } from '../projects/services/projects.service';
import { HeaderVisibilityService } from '../header/service/header-visibility.service';
import {LoadingScreenComponent} from '../loading-screen/loading-screen.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingScreenComponent],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  startIndex = 0;
  limit = 3;
  isLoading = true;

  constructor(
    private projectService: ProjectsService,
    private headerVisibilityService: HeaderVisibilityService
  ) {}

  ngOnInit() {
    this.headerVisibilityService.setShowHeader(false);
    this.projectService.getProjects(this.startIndex, this.limit).subscribe((projects) => {
      this.projects = projects;
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.headerVisibilityService.setShowHeader(true);
  }

  viewProject(id: number) {
    console.log(`Viewing project with ID: ${id}`);
  }
}
