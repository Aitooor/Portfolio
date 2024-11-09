import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService, Project } from './services/projects.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  startIndex = 0;
  limit = 3; // Load projects by line
  loading = false;
  hasMoreProjects = true;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.loadProjects();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100 && !this.loading && this.hasMoreProjects) {
      this.loadProjects();
    }
  }

  loadProjects() {
    if (!this.hasMoreProjects) {
      return;
    }

    this.loading = true;
    this.projectsService.getProjects(this.startIndex, this.limit).subscribe((newProjects: Project[]) => {
      if (newProjects.length < this.limit) {
        this.hasMoreProjects = false;
      }
      this.projects = [...this.projects, ...newProjects];
      this.startIndex += this.limit;
      this.loading = false;
      this.checkScroll(); // Check if more projects need to be loaded
    });
  }

  viewProject(id: number) {
    console.log(`Viewing project with ID: ${id}`);
  }
}
