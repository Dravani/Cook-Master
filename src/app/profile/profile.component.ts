import { Component, Input } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() show!: boolean;
  firestore: FirebaseTSFirestore;
  auth: FirebaseTSAuth;
  constructor() {
    this.firestore = new FirebaseTSFirestore();
    this.auth = new FirebaseTSAuth();
  }

  onContinueClick(nameInput: HTMLInputElement, descriptionInput: HTMLTextAreaElement) {
    let name = nameInput.value;
    let description = descriptionInput.value;
    let likeCount = 0;
    this.firestore.create(
      {
        path: ["Users", this.auth.getAuth().currentUser?.uid!],
        data: {
          publicName: name,
          description: description,
          userlikeCount: likeCount
        },
        onComplete: (docId) => {
          alert("Profile Created!");
          nameInput.value = "";
          descriptionInput.value = "";
        },
        onFail: (err) => {

        }
      }
    );
  }
}
