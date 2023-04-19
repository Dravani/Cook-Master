import { Component } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-userprofilepage',
  templateUrl: './userprofilepage.component.html',
  styleUrls: ['./userprofilepage.component.css']
})
export class UserprofilepageComponent {
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  userHasProfile = true;
  private static userDocument: UserDocument;//private static doesnt allow !


  constructor() {
    this.getUserProfile();
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
  getUserProfile() {
    this.firestore.listenToDocument(
      {
        name: "Getting Document",
        path: ["Users", this.auth.getAuth().currentUser?.uid!
      ],
        onUpdate: (result) => {
          UserprofilepageComponent.userDocument = <UserDocument>result.data();
          UserprofilepageComponent.userDocument.userId = this.auth.getAuth().currentUser?.uid!;
          // UserprofilepageComponent.userDocument.description = this.auth.getAuth().currentUser?.d
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
}

