import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../animation';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [fadeInUp]
})
export class SkillsComponent {
  categories = [
    {
      label: 'Languages',
      icon: 'fa-solid fa-code',
      color: '#f59e0b',
      skills: [
        { name: 'Java',       icon: 'fa-brands fa-java',       color: '#f89820' },
        { name: 'C++',        icon: 'fa-solid fa-file-code',   color: '#00599c' },
        { name: 'Python',     icon: 'fa-brands fa-python',     color: '#3776ab' },
        { name: 'SQL',        icon: 'fa-solid fa-table',       color: '#e38c00' },
        { name: 'TypeScript', icon: 'fa-brands fa-js',         color: '#3178c6' },
        { name: 'JavaScript', icon: 'fa-brands fa-square-js',  color: '#f7df1c' },
      ]
    },
    {
      label: 'Backend',
      icon: 'fa-solid fa-server',
      color: '#6366f1',
      skills: [
        { name: 'Node.js',    icon: 'fa-brands fa-node-js', color: '#68a063' },
        { name: 'Spring Boot',icon: 'fa-solid fa-leaf',     color: '#6db33f' },
        { name: 'Express.js', icon: 'fa-solid fa-bolt',     color: '#f59e0b' },
        { name: 'REST APIs',  icon: 'fa-solid fa-plug',     color: '#06b6d4' },
      ]
    },
    {
      label: 'Frontend',
      icon: 'fa-solid fa-desktop',
      color: '#8b5cf6',
      skills: [
        { name: 'Angular',    icon: 'fa-brands fa-angular',    color: '#dd0031' },
        { name: 'HTML5',      icon: 'fa-brands fa-html5',      color: '#e34c26' },
        { name: 'SCSS / CSS', icon: 'fa-brands fa-css3-alt',   color: '#264de4' },
        { name: 'Bootstrap',  icon: 'fa-brands fa-bootstrap',  color: '#563d7c' },
      ]
    },
    {
      label: 'Cloud & DevOps',
      icon: 'fa-solid fa-cloud',
      color: '#06b6d4',
      skills: [
        { name: 'AWS',    icon: 'fa-brands fa-aws',          color: '#ff9900' },
        { name: 'Docker', icon: 'fa-brands fa-docker',       color: '#2496ed' },
        { name: 'Linux',  icon: 'fa-brands fa-linux',        color: '#fcc624' },
        { name: 'CI / CD',icon: 'fa-solid fa-arrows-rotate', color: '#10b981' },
      ]
    },
    {
      label: 'Data & Testing',
      icon: 'fa-solid fa-database',
      color: '#ec4899',
      skills: [
        { name: 'PostgreSQL', icon: 'fa-solid fa-database', color: '#336791' },
        { name: 'MongoDB',    icon: 'fa-solid fa-leaf',     color: '#47a248' },
        { name: 'Firebase',   icon: 'fa-solid fa-fire',     color: '#ffcb2b' },
        { name: 'Redis',      icon: 'fa-solid fa-memory',   color: '#dc382d' },
        { name: 'API Testing',icon: 'fa-solid fa-vial',     color: '#8b5cf6' },
      ]
    }
  ];
}
