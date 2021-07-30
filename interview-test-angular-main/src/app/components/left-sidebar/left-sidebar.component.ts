import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  @Input() typeControl: FormControl;
  @Input() channel: any = [];
  @Output() OptionsSelected = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  changeOption($event): any {
    this.OptionsSelected.emit($event);
  }
}
