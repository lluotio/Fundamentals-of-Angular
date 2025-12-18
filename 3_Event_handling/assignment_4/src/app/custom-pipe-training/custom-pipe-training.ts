import { Component } from '@angular/core';
import { MegapipePipe } from '../megapipe-pipe';

@Component({
  selector: 'app-custom-pipe-training',
  imports: [MegapipePipe],
  templateUrl: './custom-pipe-training.html',
  styleUrl: './custom-pipe-training.css',
})
export class CustomPipeTraining {
  originalText: string = "";

  handleChange (inputUser: string) {
    this.originalText = inputUser;
  }
}
