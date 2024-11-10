import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  skills: string[] = ['JavaScript', 'TypeScript', 'Angular', 'CSS', 'HTML'];
  hobbies: string[] = ['Reading', 'Traveling', 'Coding', 'Gaming'];
}
