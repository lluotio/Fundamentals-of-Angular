import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberStore {
  sumOfNumbers: number = 0;
}
