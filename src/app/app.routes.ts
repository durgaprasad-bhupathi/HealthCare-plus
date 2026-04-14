import { Routes } from '@angular/router';
import { Doctors } from './pages/doctors/doctors';
import { Services } from './pages/services/services';
import { Appointment } from './pages/appointment/appointment';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'doctors', component: Doctors },
  { path: 'services', component: Services },
  { path: 'appointment', component: Appointment },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound },
];
