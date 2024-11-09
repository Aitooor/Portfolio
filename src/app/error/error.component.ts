import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {HeaderVisibilityService} from '../header/service/header-visibility.service';
import { FooterVisibilityService } from '../footer/service/footer-visibility.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private headerVisibilityService: HeaderVisibilityService,
    private footerVisibilityService: FooterVisibilityService
  ) {}

  ngOnInit() {
    this.headerVisibilityService.setShowHeader(false);
    this.footerVisibilityService.setShowFooter(false);
  }

  ngOnDestroy() {
    this.headerVisibilityService.setShowHeader(true);
    this.footerVisibilityService.setShowFooter(true);
  }

  goHome() {
    this.router.navigate(['/']).then(r => console.log(r));
  }
}
