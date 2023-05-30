import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'homePage'
})
export class HomePagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
