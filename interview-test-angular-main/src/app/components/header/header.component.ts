import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  channels: any = [];
  @Input() channelControl: FormControl;
  constructor(public apiService: ApiService) {
     this.getChannels()
   }

  ngOnInit(): void {
  }
  private getChannels(): any {
    this.apiService.getUsers().subscribe(channels => {
      this.channels = channels;
      this.channelControl.patchValue(channels[0])
    });
  }
  selectChannel(channel): any {
    this.channelControl.patchValue(channel);
  }

}
