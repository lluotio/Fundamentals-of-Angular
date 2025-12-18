import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { UpperCasePipe } from '@angular/common';
import { PercentPipe } from '@angular/common';


@Component({
  selector: 'app-pipe-training',
  imports: [CurrencyPipe, UpperCasePipe, PercentPipe],
  templateUrl: './pipe-training.html',
  styleUrl: './pipe-training.css',
})
export class PipeTraining {
  numbers: number = 21475.24;
  text: string = 'Täsä ois tekstiä ja sillettii'
  percent: number = 12.23;
}
