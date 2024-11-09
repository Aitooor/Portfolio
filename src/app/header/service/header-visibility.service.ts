// src/app/header/service/header-visibility.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderVisibilityService {
  private showHeaderSubject = new BehaviorSubject<boolean>(true);
  showHeader$ = this.showHeaderSubject.asObservable();

  setShowHeader(show: boolean) {
    this.showHeaderSubject.next(show);
  }
}
