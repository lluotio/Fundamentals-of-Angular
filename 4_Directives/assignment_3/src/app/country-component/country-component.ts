import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-country-component',
  imports: [CommonModule],
  templateUrl: './country-component.html',
  styleUrl: './country-component.css',
})
export class CountryComponent {
  items: string[] = ['Suami', 'Ruatti', 'Ameriikka', 'Lontoo', 'Taimaa']
}
