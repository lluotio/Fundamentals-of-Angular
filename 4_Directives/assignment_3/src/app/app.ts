import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country-component/country-component';
import { NgSwitchTraining } from './ng-switch-training/ng-switch-training';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, CountryComponent, NgSwitchTraining],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showImage = true;

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
