import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  doctors: any[] = [];

  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.api.getDoctors().subscribe((res: any) => {
      const data = res.slice(0, 3);

      this.doctors = [
        {
          ...data[0],
          specialization: 'Cardiologist',
          rating: 3.2,
          experience: '7 yrs',
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          ...data[1],
          specialization: 'Dermatologist',
          rating: 4.2,
          experience: '14 yrs',
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          ...data[2],
          specialization: 'Neurologist',
          rating: 4.4,
          experience: '7 yrs',
          image: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
      ];
    });
  }

  goToAppointment() {
    this.router.navigate(['/appointment']);
  }
}
