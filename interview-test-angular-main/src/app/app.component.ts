import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public scheduleForm: FormGroup;
  
  public constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.scheduleForm = new FormBuilder().group({
      channel: [new FormBuilder().control, Validators.required],
      image: [new FormBuilder().control, Validators.required],
      date: ['', Validators.required],
      type: ['feed', Validators.required],
    });
  }

  // post do agendamento via service
  public schedule(): any {
    if (this.scheduleForm.value.date === ''){
      Swal.fire('Escolha uma data');
    }
    if (this.scheduleForm.value.image.url === undefined){
      Swal.fire('Escolha uma Imagem');
    }
    if (this.scheduleForm.valid){
      this.apiService.postSchedule(this.scheduleForm.value).subscribe(data => {
        if (data){
          Swal.fire('Agendamento realizado!');
        }
      });
      this.scheduleForm.get('image').patchValue({url: null, file: null});
      this.scheduleForm.get('date').reset();
    } 
  }
}
