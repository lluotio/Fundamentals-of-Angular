import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeTraining } from './pipe-training/pipe-training';
import { JsonPipeTraining } from './json-pipe-training/json-pipe-training';
import { CommonModule } from '@angular/common';
import { MegapipePipe } from './megapipe-pipe';
import { CustomPipeTraining } from './custom-pipe-training/custom-pipe-training';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipeTraining, JsonPipeTraining, CommonModule, MegapipePipe, CustomPipeTraining],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('assignment_4');
}
