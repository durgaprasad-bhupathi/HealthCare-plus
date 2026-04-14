import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointment.html',
  styleUrls: ['./appointment.css'],
})
export class Appointment {
  success = false;
  selectedDoctor: any = null;

  doctors = [
    'Leanne Graham',
    'Ervin Howell',
    'Clementine Bauch',
    'Patricia Lebsack',
    'Chelsey Dietrich',
    'Mrs. Dennis Schulist',
    'Kurtis Weissnat',
    'Nicholas Runolfsdottir V',
    'Glenna Reichert',
    'Clementina DuBuque',
  ];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]),
    doctor: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
  });

  ngOnInit() {
    const data = history.state;

    if (data?.doctor) {
      this.selectedDoctor = data.doctor;

      this.form.patchValue({
        doctor: this.selectedDoctor.name,
      });
    }
  }

  submit() {
    if (this.form.valid) {
      console.log('Form Data:', this.form.value);
      console.log('Doctor Details:', this.selectedDoctor);

      this.success = true;
      this.form.reset();
    }
  }
}
