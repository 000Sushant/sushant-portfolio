import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    PublicationsComponent,
    ContactComponent
  ],
  template: `
    <app-header></app-header>
    <app-about></app-about>
    <app-skills></app-skills>
    <app-projects></app-projects>
    <app-publications></app-publications>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}