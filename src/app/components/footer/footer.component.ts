import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ];

  socials = [
    { icon: 'fa-brands fa-github', href: 'https://github.com', label: 'GitHub' },
    { icon: 'fa-brands fa-linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fa-brands fa-twitter', href: 'https://twitter.com', label: 'Twitter' },
  ];
}

