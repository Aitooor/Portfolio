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

//TODO need to improve this at html and css
export class AboutComponent {
  skills: string[] = [
    'Java', 'Kotlin', 'Spring',
    'HTML5', 'CSS3', 'Less',
    'Sass', 'Markdown', 'TailwindCSS',
    'Bootstrap', 'JavaFX', 'Thymeleaf',
    'JavaScript', 'TypeScript', 'Angular',
    'npm', 'Node.js', 'BashScript',
    'PHP', 'WordPress', 'Python',
    'SQL', 'MongoDB', 'MySQL',
    'MariaDB', 'SQLite', 'Redis',
    'Git', 'Github Actions', 'Gradle',
    'Maven', 'Hibernate', 'YAML',
    'JSON', 'GSON', 'Linux',
    'Windows', 'MacOS', 'Ubuntu',
    'Debian', 'CentOS', 'Linux Mint',
    'Android', 'iOS', 'Adobe',
    'Photoshop', 'Illustrator', 'InDesign',
    'Aseprite', 'Blender', 'Cinema 4D',
    'OVH', 'AWS', 'DigitalOcean',
    'Github Pages', 'Oracle', 'Vercel',
    'Github', 'Gitlab', 'Android Studio',
    'IntelliJ IDEA', 'WebStorm', 'Visual Studio Code',
    'Eclipse', 'Fleet', 'Sublime Text',
    'Notepad++', 'XCODE', 'Postman',
    'Cloudflare', 'Gitbook', 'Apache',
    'Nginx', 'Docker', 'Trello',
    'Notion', 'Github Copilot', 'Dependabot'
  ];
  hobbies: string[] = ['Reading', 'Traveling', 'Coding', 'Gaming'];
}
