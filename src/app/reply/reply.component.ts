import { Component, Inject, Input, OnInit } from '@angular/core';
import { FirebaseTSFirestore, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit{
  firestore = new FirebaseTSFirestore();
  comments: Comment [] = [];
  constructor(@Inject(MAT_DIALOG_DATA) private postId: string) {}

  ngOnInit(): void {
    this.getComments();
  }

  isCommentCreator(comment: Comment){
    try {
      return comment.creatorId == NavbarComponent.getUserDocument().userId;
    } catch (err) {
      
    }
  }

  getComments() {
    this.firestore.listenToCollection(
      {
        name: "Post Comments",
        path: ["Posts", this.postId, "PostComments"],
        where: [new OrderBy("timestamp", "asc")],
        onUpdate: (result)=> {
          result.docChanges().forEach(
            postCommentDoc => {
              if(postCommentDoc.type == "added") {
                this.comments.unshift(<Comment>postCommentDoc.doc.data());
              }
            }
          );
        }
      }
    );
  }

  onSendClick(commentInput: HTMLInputElement){
    if(!(commentInput.value.length > 0)) return;
    this.firestore.create(
      {
        path: ["Posts", this.postId, "PostComments"],
        data: {
          comment: commentInput.value,
          creatorId: NavbarComponent.getUserDocument().userId,
          creatorName: NavbarComponent.getUserDocument().publicName,
          timestamp: FirebaseTSApp.getFirestoreTimestamp()
        },
        onComplete: (docId) => {
          commentInput.value = "";
        }
      }
    );
  }
}

export interface Comment {
  creatorId: string;
  creatorName: string;
  comment: string;
  timestamp: firebase.default.firestore.Timestamp
}
