import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumberStore } from '../number-store';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './divider.html',
  styleUrls: ['./divider.css']
})
export class Divider {

  dividedNumber = 0;

  constructor(private numberStore: NumberStore) {}

  handleSelection(divider: string) {
    const dividerValue = Number(divider);
    const sum = this.numberStore.sumOfNumbers;

    this.dividedNumber = sum / dividerValue;
  }
}