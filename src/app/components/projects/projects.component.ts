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
      title: 'AI Election Assistant (Votika)',
      description: 'AI-enabled platform powered by Vertex AI to help individuals understand the Indian election process. Secured Rank 82/15,460 in Google Promptwar.',
      tags: ['Angular', 'Node.js', 'GCP', 'Docker', 'Vertex AI'],
      icon: 'fa-solid fa-check-to-slot',
      color: '#fbbf24',
      link: 'https://votika-719327177662.europe-west1.run.app/',
      github: 'https://github.com/000Sushant/election-assistant'
    },
    {
      title: 'AI Resume Studio',
      description: 'An OpenAI and Gemini AI powered tool that tailors resumes according to job descriptions and generates customized cover letters.',
      tags: ['Angular', 'Node.js', 'OpenAI', 'Gemini AI', 'GCP'],
      icon: 'fa-solid fa-file-pen',
      color: '#ec4899',
      link: 'https://resume-studio-719327177662.asia-south1.run.app/',
      github: 'https://github.com/000Sushant/resume-tailor'
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
