import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangeBgDirective } from './change-bg';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangeBgDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count: number = 0;
  addCount(){
    this.count++;
  }
}
