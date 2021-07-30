import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() channel;
  @Input() shoWdetails: boolean;
  @Input() imgWidth: any;
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
