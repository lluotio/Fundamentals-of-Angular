import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'megapipe',
})
export class MegapipePipe implements PipeTransform {
  transform(value: string): string {
      if (!value) return value;
      return value.replace(/[^a-zA-ZåäöÅÄÖ]/g, '').split('').reverse().join('');
  }
}
