import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @Input() typeControl: FormControl;
  @Output() optionSelected = new EventEmitter();
  selected = 'Novo post';
  constructor() { }

  ngOnInit(): void {
    this.typeControl.patchValue('feed');
  }
  changeOption(selected): any {
    this.selected = selected;
    this.optionSelected.emit(selected);
    if (this.selected === 'Novo post'){
      this.typeControl.patchValue('feed');
    }
    if (this.selected === 'Novo story'){
      this.typeControl.patchValue('history');
    }
  }
}
