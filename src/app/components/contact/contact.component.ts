import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../animation';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [fadeInUp]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  socials = [
    { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/sushant--kumar', color: '#0a66c2' },
    { icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com/000Sushant', color: '#f1f5f9' },
    { icon: 'fa-solid fa-file-arrow-down', label: 'Resume', href: 'assets/resume.pdf', color: '#10b981' },
  ];

  readonly recipientEmail = '000sushantkumar@gmail.com';

  submitForm() {
    const subject = encodeURIComponent(`Opportunity for Sushant Kumar — from ${this.name}`);
    const body = encodeURIComponent(
      `Hi Sushant,\n\n${this.message}\n\n--\n${this.name}\n${this.email}`
    );
    window.location.href = `mailto:${this.recipientEmail}?subject=${subject}&body=${body}`;

    this.submitted = true;
    setTimeout(() => {
      this.submitted = false;
      this.name = '';
      this.email = '';
      this.message = '';
    }, 4000);
  }
}
