import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MegapipePipe } from '../megapipe-pipe';

@Component({
  selector: 'app-json-pipe-training',
  imports: [JsonPipe, MegapipePipe],
  templateUrl: './json-pipe-training.html',
  styleUrl: './json-pipe-training.css',
})
export class JsonPipeTraining {
  exampleObject = {
    name:'Jorma',
    age:'100',
    job:'Meat cutter'
  }

  exampleArray = ['mitä','ihmettä', 'täällä','tapahtuu']
}
