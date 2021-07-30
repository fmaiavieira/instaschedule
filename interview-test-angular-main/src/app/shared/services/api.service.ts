import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable} from 'rxjs';
import { Schedule } from '../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private form: FormGroup;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get('api/channels');
  }

  public getSchedules(): Observable<any> {
    return this.http.get('api/schedules');
  }

  public postSchedule(data: Schedule): Observable<Schedule> {
    return this.http.post<any>('api/schedules', data, this.httpOptions);
  }
}
