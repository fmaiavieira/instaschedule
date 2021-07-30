import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Directive({
  selector: '[appImageUpload]'
})
export class ImageUploadDirective {

  constructor() { }

  @HostBinding('class.fileover') fileOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();
  @Output() imageUrl = new EventEmitter<any>();

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt): any {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt): any {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt): any {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const reader = new FileReader();
    const files = evt.dataTransfer.files[0];

    if (files.type === 'image/jpeg' || files.type === 'image/png'){
      reader.readAsDataURL(evt.dataTransfer.files[0]); // read file as data url

      reader.onload = (file) => { // called once readAsDataURL is completed
        const url = file.target.result;
        this.imageUrl.emit(url);
        this.fileDropped.emit(files);
      };
    } else{
      Swal.fire('O tipo de arquivo deve ser .JPG ou .PNG');
    }
  }
}
