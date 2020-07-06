import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myUppercase'
})
export class MyUppercasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(value)
    return value.toUpperCase( );
  }

}
