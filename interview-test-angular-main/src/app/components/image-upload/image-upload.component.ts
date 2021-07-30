import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  @Input() imageControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  setDroppedUrl(event): any {
    this.imageControl.value.url = event;
  }

  onDropFile(file): any {
    this.imageControl.value.file = file;
  }

  onSelectFile(event): any {
    if (event.target.files && event.target.files[0]) {
      this.imageControl.value.file = event.target.files[0];
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (file) => { // called once readAsDataURL is completed
        this.imageControl.value.url = file.target.result;
      };
    }
  }
}
