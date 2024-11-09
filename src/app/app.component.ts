// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderVisibilityService } from './header/service/header-visibility.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aitor Arias Benéitez';
  showHeader = true;

  constructor(private headerVisibilityService: HeaderVisibilityService) {
    this.headerVisibilityService.showHeader$.subscribe(show => {
      this.showHeader = show;
    });
  }
}
