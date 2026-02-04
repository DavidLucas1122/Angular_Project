import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html'
})
export class HomeComponent {
  breed: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  search() {
    if (!this.breed.trim()) {
      this.errorMessage = 'Digite uma raça para pesquisar';
      return;
    }

    this.errorMessage = '';
    this.router.navigate(['results', this.breed.toLowerCase()]);
  }
}
