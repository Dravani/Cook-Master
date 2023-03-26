import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  selectedImageFile: File;
  constructor() { 
    this.selectedImageFile = null as any;
  }


  onPhotoSelected(photoSelector: HTMLInputElement) {
    this.selectedImageFile = photoSelector.files![0];
    let fileReader = new FileReader(); 

    if(!this.selectedImageFile) return;  
      fileReader.readAsDataURL(this.selectedImageFile);
      fileReader.addEventListener(
        "loadend",
        ev => {
          let readableString = fileReader.result!.toString();
          let postPreviewImage = <HTMLImageElement>document.getElementById("post-preview-image");
          postPreviewImage.src = readableString;
        } 
      );
}



}
