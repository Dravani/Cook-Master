import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore, Limit, OrderBy, Where } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-userprofilepage',
  templateUrl: './userprofilepage.component.html',
  styleUrls: ['./userprofilepage.component.css']
})
export class UserprofilepageComponent implements OnInit {
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  posts: PostData [] = [];
  userHasProfile = true;
  private static userDocument: UserDocument;//private static doesnt allow !

  ngOnInit(): void {
    this.getPosts();
  }

  constructor() {
    this.getUserProfile();
    this.getPosts();
  }

  public static getUserDocument(){
    return UserprofilepageComponent.userDocument;
  }
  getUsername() {
    try {
      return UserprofilepageComponent.userDocument.publicName;
    } catch (err) {

    }
  }
  getDes() {
    try {
      return UserprofilepageComponent.userDocument.description;
    } catch (err) {

    }
  }
  getLikeCount() {
    try {
      return UserprofilepageComponent.userDocument.likeCount;
    } catch (err) {

    }
  }
  getUserProfile() {
    this.firestore.listenToDocument(
      {
        name: "Getting Document",
        path: ["Users", this.auth.getAuth().currentUser?.uid!
      ],
        onUpdate: (result) => {
          UserprofilepageComponent.userDocument = <UserDocument>result.data();
          UserprofilepageComponent.userDocument.userId = this.auth.getAuth().currentUser?.uid!;
        }
      }
    );
  }

  getPosts() {
    this.firestore.getCollection(
      {
        path: ["Posts"],
        where: [new Where("creatorId", "==", "FBC4QZ3xGrUBgWlRAXGdv498f4y2"), new OrderBy("timestamp", "desc"), new Limit(50)],
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
}
;
export interface UserDocument {
  publicName: string;
  description: string;
  userId: string;
  likeCount: number;
}
export interface PostData {
  comment: string;
  creatorId: string;
  imageUrl?: string;
  postId: string;
}

