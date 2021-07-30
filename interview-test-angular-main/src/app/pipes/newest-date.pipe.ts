import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newestDate'
})
export class NewestDatePipe implements PipeTransform {

  transform(value: any): any {
    // insere as datas em um array separado
    const dates = [];
    value.data.forEach(date => {
      dates.push(date.date);
    });
    // filtra a data mais antiga dos agendamentos
    const newest = dates.reduce((a, b) =>
      Date.parse(b) > Date.parse(a) ? b : a
    );
    return newest;
  }

}
