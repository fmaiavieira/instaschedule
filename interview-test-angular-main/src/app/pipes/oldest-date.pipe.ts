import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oldestDate'
})
export class OldestDatePipe implements PipeTransform {

  transform(value: any): any {
    // insere as datas em um array separado
    const dates = [];
    value.data.forEach(date => {
      dates.push(date.date);
    });
    // filtra a data mais antiga dos agendamentos
    const oldest = dates.reduce((a, b) =>
      Date.parse(b) < Date.parse(a) ? b : a
    );
    return oldest;
  }

}
