import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Random } from './random/random';
import { Divider } from './divider/divider';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Random, Divider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment_1');
}
