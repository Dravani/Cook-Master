import { Component } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  selectedImageFile: File;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();
  constructor() { 
    this.selectedImageFile = null as any;
  }

  onPostClick(commentInput : HTMLTextAreaElement) {
    let comment = commentInput.value;
    let postId = this.firestore.genDocId();
    this.storage.upload(
      {
        uploadName: "upload Image Post",
        path: ["Posts", postId, "image"],
        data: {
          data.this.selectedImageFile
        },
        onComplete: (downloadUrl) => {
          alert(downloadUrl);
        }
      }
    );
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
