import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
})
export class Services {
  services = [
    {
      title: 'Cardiology',
      icon: '❤️',
      description: 'Advanced care for heart and cardiovascular conditions.',
    },
    {
      title: 'Dermatology',
      icon: '🧴',
      description: 'Expert treatment for skin, hair, and nail disorders.',
    },
    {
      title: 'Neurology',
      icon: '🧠',
      description: 'Specialized care for brain and nervous system issues.',
    },
    {
      title: 'Pediatrics',
      icon: '👶',
      description: 'Comprehensive healthcare services for children.',
    },
    {
      title: 'Gynecology',
      icon: '👩‍⚕️',
      description: 'Women’s health and reproductive care services.',
    },
    {
      title: 'Dentistry',
      icon: '🦷',
      description: 'Complete dental care and oral health treatments.',
    },
    {
      title: 'Orthopedics',
      icon: '🦴',
      description: 'Treatment for bones, joints, and muscle problems.',
    },
  ];
}
