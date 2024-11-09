// src/app/header/service/footer-visibility.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterVisibilityService {
  private showFooterSubject = new BehaviorSubject<boolean>(true);
  showFooter$ = this.showFooterSubject.asObservable();

  setShowFooter(show: boolean) {
    this.showFooterSubject.next(show);
  }
}
