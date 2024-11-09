import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderVisibilityService } from '../header/service/header-visibility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true
})
export class FooterComponent implements OnInit, OnDestroy {
  currentYear: number = new Date().getFullYear();
  showFooter: boolean = true;
  private subscription: Subscription | null = null;

  constructor(private headerVisibilityService: HeaderVisibilityService) {}

  ngOnInit() {
    this.subscription = this.headerVisibilityService.showHeader$.subscribe(show => {
      this.showFooter = show;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
