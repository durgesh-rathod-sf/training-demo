import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanize'
})
export class HumanizePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return this.toCapitalizedWords(value);
  }
  toCapitalizedWords(name: string) {
    var words = name.match(/[A-Za-z][a-z]*/g) || [];

    return words.map(this.capitalize).join(' ');
  }

  capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }

}
