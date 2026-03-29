import { trigger, style, animate, transition, query, stagger, keyframes } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const fadeInLeft = trigger('fadeInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-40px)' }),
    animate('700ms 100ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const fadeInRight = trigger('fadeInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(40px)' }),
    animate('700ms 200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
  ])
]);

export const staggerChildren = trigger('staggerChildren', [
  transition(':enter', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('80ms', [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.85)' }),
    animate('500ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1)' }))
  ])
]);

export const heroEntrance = trigger('heroEntrance', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(50px)' }),
    animate('900ms 150ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);
