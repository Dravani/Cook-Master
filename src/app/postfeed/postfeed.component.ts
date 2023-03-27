import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from '../create-post/create-post.component';
import { LoginComponent } from '../login/login.component';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css']
})
export class PostfeedComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  posts: PostData [] = [];
  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getPosts();
  }

  onCreatePostClick(){
    this.dialog.open(CreatePostComponent);
  }

  getPosts() {
    this.firestore.getCollection(
      {
        path: ["Posts"],
        where: [new OrderBy("timestamp", "desc"), new Limit(10)],
        onComplete: (result) => {
          result.docs.forEach(
            doc => {
              let post = <PostData>doc.data();
              this.posts.push(post);
            }
          );
        },
        onFail: err => {

        }
      }
    );
  }

}

export interface PostData {
  comment: string;
  creatorId: string;
  imageUrl?: string;
}
