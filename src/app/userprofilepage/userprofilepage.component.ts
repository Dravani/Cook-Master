import { Component, Input } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { PostData } from '../postfeed/postfeed.component';


@Component({
  selector: 'app-userprofilepage',
  templateUrl: './userprofilepage.component.html',
  styleUrls: ['./userprofilepage.component.css']
})
export class UserprofilepageComponent {
  @Input() postData!: PostData;
  firestore: FirebaseTSFirestore;
  auth: FirebaseTSAuth;
  creatorName!: string;
  creatorDescription!: string;

  constructor() {
    this.firestore = new FirebaseTSFirestore();
    this.auth = new FirebaseTSAuth();
  }

  getCreatorInfo() {
    this.firestore.getDocument(
      {
        path: ["Users", this.postData.creatorId],
        onComplete: result => {
          let userDocument = result.data();
          this.creatorName = userDocument?.['publicName'];
          this.creatorDescription = userDocument?.['description'];
        }
      }
    );
  }

  getCreatorName(){
    return this.creatorName;
  }
  getCreatorDescription(){
    return this.creatorDescription;
  }
}


