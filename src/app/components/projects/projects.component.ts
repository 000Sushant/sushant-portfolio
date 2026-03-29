import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../animation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [fadeInUp]
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern Angular 18 portfolio with glassmorphism, dark theme, CSS animations, and component-driven architecture.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      icon: 'fa-solid fa-briefcase',
      color: '#6366f1',
      link: '#',
      github: '#'
    },
    {
      title: 'Automation Tool (internal tool)',
      description: 'End-to-end UI + API test automation framework with scheduled reporting, CI/CD integration, and schema validation.',
      tags: ['Appium', 'Selenium', 'Java', 'Jenkins'],
      icon: 'fa-solid fa-vial-circle-check',
      color: '#06b6d4',
      link: null,
      github: null
    },
    {
      title: 'OSS Approval tool (internal tool)',
      description: 'Tool to read production dependencies and compare them with the previous release to generate approval reports for open-source dependencies.',
      tags: ['Java', 'Swing'],
      icon: 'fa-solid fa-chart-line',
      color: '#8b5cf6',
      link: null,
      github: null
    },
    {
      title: 'Factory tool (internal tool)',
      description: 'A tool for factory to upload manufacturing data to internal datalake',
      tags: ['Java', 'Springboot', 'Angular', 'AWS'],
      icon: 'fa-solid fa-gears',
      color: '#10b981',
      link: null,
      github: null
    },
    {
      title: 'DailyShell',
      description: 'A full fledge cyber security blogging site with admin panel for managing content and user interactions.',
      tags: ['PHP', 'MySQL', 'HTML', 'Bootstrap', 'CSS'],
      icon: 'fa-solid fa-newspaper',
      color: '#f59e0b',
      link: 'https://drive.google.com/drive/folders/1tfoUUbYIVEDlhKovwhxI-KB3lez-Rt4Y?usp=drive_link',
      github: 'https://github.com/000Sushant/dailyshell'
    },
    {
      title: 'Cyber Security tool',
      description: 'A Python based ethical hacking toolkit learn and practice cyber attack techniques in a safe environment.',
      tags: ['Python', 'Linux'],
      icon: 'fa-solid fa-shield-alt',
      color: '#ef4444',
      link: 'https://github.com/000Sushant/CS-Tools',
      github: 'https://github.com/000Sushant/CS-Tools'
    }
  ];
}
