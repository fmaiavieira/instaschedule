import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DecrescentOrderPipe } from 'src/app/pipes/decrescent-order.pipe';
import { NewestDatePipe } from 'src/app/pipes/newest-date.pipe';
import { OldestDatePipe } from 'src/app/pipes/oldest-date.pipe';
import { ApiService } from 'src/app/shared/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {
  public displayedColumns = ['type', 'status', 'image', 'channel', 'date'];
  currentDate = new Date();
  date: Date;
  schedules;
  schedulePeriod;

  @Input() imageControl: FormControl;
  @Input() postType;
  @Input() dateControl: FormControl;
  @Output() postSchedule = new EventEmitter<any>();

  public getOldest = new OldestDatePipe();
  public getNewest = new NewestDatePipe();
  public decrescent = new DecrescentOrderPipe();

  constructor(public apiService: ApiService) {
    this.getSchedules();
  }

  ngOnInit(): void {
  }

  schedule($event): any {
    this.postSchedule.emit($event);
    this.getSchedules();
  }

  setFormDate(): any{
    const yesterday = new Date();
    yesterday.setDate(this.currentDate.getDate() - 1);
    const date = new Date(this.date + 'T' + this.currentDate.toLocaleTimeString());

    if (yesterday > date){
      Swal.fire('A data não pode ser inferior a data de hoje.');
      this.date = this.currentDate;
    } else{
      this.dateControl.patchValue(date);
    }
  }

   // get dos agendamentos e periodos.
   private getSchedules(): any {
    this.apiService.getSchedules()
      .subscribe(response => {
      this.setDates(response);
      this.schedules = this.decrescent.transform(response.data);
    });
  }

  // filtra e salva o periodo dos agendamentos
  private setDates(response): any {
    this.schedulePeriod = {
      start_date: this.getOldest.transform(response),
      end_date: this.getNewest.transform(response)
    };
  }
}
