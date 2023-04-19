import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from '../create-post/create-post.component';
import { LoginComponent } from '../login/login.component';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css']
})
export class PostfeedComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  posts: PostData [] = [];
  auth = new FirebaseTSAuth();
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
              post.postId = doc.id;
              this.posts.push(post);
            }
          );
        },
        onFail: err => {

        }
      }
    );
  }

  loggedIn() {
    return this.auth.isSignedIn();
  }

}

export interface PostData {
  comment: string;
  creatorId: string;
  imageUrl?: string;
  postId: string;
}
