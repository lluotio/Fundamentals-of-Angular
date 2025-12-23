import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-switch-training',
  imports: [CommonModule],
  templateUrl: './ng-switch-training.html',
  styleUrl: './ng-switch-training.css',
})
export class NgSwitchTraining {
  page = 'home';

  setPage(name: string) {
    this.page = name;
  }
}
