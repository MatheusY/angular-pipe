import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): any {
    let reverse = '';
    console.log(value);
    for (let index = value.length; index >= 0; index--) {
      reverse += value.charAt(index);
    }
    return reverse;
  }
}
