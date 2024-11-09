import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderVisibilityService} from './header/service/header-visibility.service';
import {FooterVisibilityService} from './footer/service/footer-visibility.service';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {CommonModule} from '@angular/common';

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
  showFooter = true;

  constructor(
    private headerVisibilityService: HeaderVisibilityService,
    private footerVisibilityService: FooterVisibilityService
  ) {
    this.headerVisibilityService.showHeader$.subscribe(show => {
      this.showHeader = show;
    });

    this.footerVisibilityService.showFooter$.subscribe(show => {
      this.showFooter = show;
    });
  }
}
