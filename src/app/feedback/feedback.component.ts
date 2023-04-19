import { Component } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();
  constructor(private dialog: MatDialogRef<FeedbackComponent>) { 

  }
  onSubmitClick(feedbackInput : HTMLTextAreaElement) {
    let comment = feedbackInput.value;
    if(comment.length <= 0) return;
    else {
      this.uploadFeedback(comment);
    }
  }

  uploadFeedback(comment: string) {
    this.firestore.create(
      {
        path: ["Feedback"],
        data: {
          comment: comment,
          creatorId: this.auth.getAuth().currentUser!.uid,
          timestamp: FirebaseTSApp.getFirestoreTimestamp()
        },
        onComplete: (docId: any) => {
          this.dialog.close();
        }
      }
    );
  }
}
