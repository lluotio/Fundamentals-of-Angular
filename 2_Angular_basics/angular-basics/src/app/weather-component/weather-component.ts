import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-component',
  imports: [],
  templateUrl: './weather-component.html',
  styleUrl: './weather-component.css',
})
export class WeatherComponent {
  @Input() data: string = 'Sehän toimii'
}
