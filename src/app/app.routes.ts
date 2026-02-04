import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ResultsComponent } from './pages/results/results';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'results/:breed', component: ResultsComponent }
];
