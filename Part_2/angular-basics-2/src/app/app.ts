import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  isOn: boolean = true;
  name: string = '';

  protected readonly title = signal('angular-basics-2');
  
  changeColor(){
    this.isOn = !this.isOn;
  }
}
