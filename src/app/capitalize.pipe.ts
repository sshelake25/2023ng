import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  
  transform(value: string, allWords?: boolean): string {
    if (!value) return value;

    if (allWords) {
      return value.replace(/\b\w/g, char => char.toUpperCase());
    } else {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  }
}
