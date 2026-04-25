import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { heroEntrance, fadeInUp } from '../../animation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [heroEntrance, fadeInUp]
})
export class AboutComponent implements OnInit, OnDestroy {
  private interval: any;

  roles = ['APIs', 'Workers', 'Databases', 'Web Applications', 'MCP Server', 'AI Integrations'];
  currentRoleIndex = 0;
  currentRole = this.roles[0];
  isRoleFading = false;

  stats = [
    { value: '2+', label: 'Years Exp.', icon: 'fa-solid fa-chart-line' },
    { value: '15+', label: 'Projects', icon: 'fa-solid fa-code-branch' },
    { value: '25+', label: 'Technologies', icon: 'fa-solid fa-layer-group' },
    { value: '4+', label: 'Publications', icon: 'fa-solid fa-book-open' },
  ];

  experience = [
    {
      role: 'Application Development Engineer',
      company: 'Signify',
      period: 'July 2024 – Present',
      type: 'Full-time',
      color: '#6366f1',
      highlights: [
        'Optimized legacy systems, reducing operational costs and improving overall performance.',
        'Designed and implemented scalable APIs and backend services using Node.js and TypeScript.',
        'Developed and automated worker processes to enhance system reliability and scalability.',
        'Automated API workflows and testing to improve efficiency and reduce manual effort.',
        'Integrated GenAI, Agentic tools, and LLMs to optimize development pipelines and architect innovative solutions.',
      ]
    },
    {
      role: 'R&D Intern',
      company: 'Signify',
      period: 'July 2023 – July 2024',
      type: 'Internship',
      color: '#06b6d4',
      highlights: [
        'Executed mobile UI automation testing for Android and iOS platforms.',
        'Developed and optimized backend services for internal data lake systems.',
        'Managed AWS infrastructure to ensure seamless data processing and storage operations.',
      ]
    },
  ];

  techStack = [
    { name: 'Node.js', color: '#68a063', icon: 'fa-brands fa-node-js' },
    { name: 'TypeScript', color: '#3178c6', icon: 'fa-brands fa-js' },
    { name: 'Angular', color: '#dd0031', icon: 'fa-brands fa-angular' },
    { name: 'AWS', color: '#ff9900', icon: 'fa-brands fa-aws' },
    { name: 'PostgreSQL', color: '#336791', icon: 'fa-solid fa-database' },
    { name: 'Docker', color: '#2496ed', icon: 'fa-brands fa-docker' },
  ];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.isRoleFading = true;
      setTimeout(() => {
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.currentRole = this.roles[this.currentRoleIndex];
        this.isRoleFading = false;
      }, 300);
    }, 2800);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}
