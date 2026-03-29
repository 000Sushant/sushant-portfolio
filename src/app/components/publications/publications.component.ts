import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fadeInUp } from '../../animation';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss'],
  animations: [fadeInUp]
})
export class PublicationsComponent {
  publications = [
    {
      title: 'MetaMod: An Architecture to Detect SQL Injection and XSS Using Genetic Algorithm',
      venue: 'IEEE Xplore',
      year: '2024',
      type: 'Conference',
      color: '#6366f1',
      link: '#'
    },
    {
      title: 'A Comprehensive Review on Penetration Testing Tools with Emerging Technology',
      venue: 'SSRN Electronic Journal',
      year: '2024',
      type: 'Journal',
      color: '#06b6d4',
      link: 'https://www.researchgate.net/publication/379414810_A_Comprehensive_Review_on_Penetration_Testing_Tools_with_Emerging_Technology'
    },
    {
      title: 'A Recent Study of Machine Learning Based Techniques for the Detection of Cyber-Attacks on Web Applications',
      venue: 'IEEE Xplore',
      year: '2023',
      type: 'Conference',
      color: '#8b5cf6',
      link: 'https://ieeexplore.ieee.org/document/10397832'
    },
    {
      title: 'A review on Classification of Covid-19 and Pneumonia disease using machine learning',
      venue: 'SSRN Electronic Journal',
      year: '2023',
      type: 'Journal',
      color: '#f59e0b',
      link: 'https://www.taylorfrancis.com/chapters/edit/10.1201/9781003405580-88/review-classification-covid-19-pneumonia-disease-using-machine-learning-vikram-sharma-anurag-anand-sushant-kumar-pabitra-kumar-panda-makul-mahajan'
    }
  ];
}
