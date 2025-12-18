import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberStore } from '../number-store';

@Component({
  selector: 'app-random',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './random.html',
  styleUrls: ['./random.css']
})
export class Random {
  generatedNumber = 0;
  userNumber = 0;
  sumofNumbers = 0;

  constructor(private numberStore: NumberStore) {}

  handleUserinput(userInput: string) {
    const userValue = Number(userInput);
    this.userNumber = userValue;

    this.generatedNumber = Math.floor(Math.random() * userValue) + 1;

    this.sumofNumbers = this.userNumber + this.generatedNumber;

    this.numberStore.sumOfNumbers = this.sumofNumbers;
  }
}