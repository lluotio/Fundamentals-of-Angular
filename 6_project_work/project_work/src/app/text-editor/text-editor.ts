import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-text-editor',
  imports: [MatCardModule, FormsModule],
  templateUrl: './text-editor.html',
  styleUrl: './text-editor.css',
})
export class TextEditor {
  text: string = '';

  get wordCount(): number {
    if (!this.text.trim()) {
      return 0;
    }
    return this.text
      .trim()
      .split(/\s+/)
      .length;
  }

  toUpperCase() {
    this.text = this.text.toUpperCase();
  }

  toLowerCase() {
    this.text = this.text.toLowerCase();
  }

  reverseText() {
    this.text = this.text.split('').reverse().join('');
  }

  clearText() {
    this.text = '';
  }

}
