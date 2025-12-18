import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new-component/new-component';
import { WeatherComponent } from './weather-component/weather-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent, WeatherComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular basics');
  protected readonly name = signal('Lauri')
}
