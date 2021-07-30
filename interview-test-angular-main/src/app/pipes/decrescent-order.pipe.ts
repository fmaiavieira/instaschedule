import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decrescentOrder'
})
export class DecrescentOrderPipe implements PipeTransform {

  transform(value: any): any {
    return value.sort((a, b) => {
      return <any> new Date(b.date) - <any> new Date(a.date);
    });
  }

}
