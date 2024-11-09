// src/app/header/header.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class HeaderComponent {
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.classList.toggle('active');
    }
  }
}
