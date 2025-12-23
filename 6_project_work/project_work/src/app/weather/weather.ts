import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './weather.html',
  styleUrls: ['./weather.css']
})
export class Weather {

  city: string = '';
  weather: any;
  weatherCity: string = '';

  constructor(private http: HttpClient) {}

  searchCity() {
    if (!this.city.trim()) return;

    const geoUrl =
      `https://geocoding-api.open-meteo.com/v1/search?name=${this.city}`;

    this.http.get(geoUrl).subscribe((geo: any) => {
      if (!geo.results || geo.results.length === 0) {
        this.weather = null;
        return;
      }

      const result = geo.results[0];
      const lat = result.latitude;
      const lon = result.longitude;
      this.weatherCity = result.name;

      const weatherUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

      this.http.get(weatherUrl).subscribe((data: any) => {
        this.weather = data.current_weather;
      });
    });
  }
}