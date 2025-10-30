import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseFirst',
  standalone:true,
})
export class UppercaseFirstPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
