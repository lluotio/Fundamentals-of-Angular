import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [MatCardModule, FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  display: string = '';

  press(value: string) {
    this.display += value;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    try {
      this.display = eval(this.display);
    } catch {
      this.display = 'Error';
    }
  }
}

