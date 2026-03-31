import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './doctors.html',
  styleUrl: './doctors.css',
})
export class Doctors {
  doctors: any[] = [];
  search = '';

  specializations = [
    'Cardiologist',
    'Dermatologist',
    'Neurologist',
    'Pediatrician',
    'Gynecologist',
    'Dentist',
    'Orthopedic',
  ];

  constructor(
    private api: ApiService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.api.getDoctors().subscribe((res: any) => {
      this.doctors = res.map((doc: any, index: number) => ({
        ...doc,
        specialization: this.specializations[index % this.specializations.length],
        experience: Math.floor(Math.random() * 15) + 1 + ' yrs',
        rating: (Math.random() * 2 + 3).toFixed(1),
      }));
    });
  }

  filteredDoctors() {
    return this.doctors.filter((d) => d.name.toLowerCase().includes(this.search.toLowerCase()));
  }

  goToAppointment(doc: any) {
    this.router.navigate(['/appointment'], {
      queryParams: {
        name: doc.name,
        specialization: doc.specialization,
        experience: doc.experience,
        rating: doc.rating,
      },
    });
  }
}
