import { Component } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  userHasProfile = true;
  userDocument!: UserDocument;

  constructor(private router: Router) {
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {

            },
            whenSignedOut: user => {
              alert("Logged Out");
            },
            whenSignedInAndEmailNotVerified: user => {
              this.router.navigate(["emailVerification"]);
            },
            whenSignedInAndEmailVerified: user => {
              this.getUserProfile();
            },
            whenChanged: user => {

            }
          }
        );
      }
    );
  }

  getUserProfile() {
    this.firestore.listenToDocument(
      {
        name: "Getting Document",
        path: ["Users", this.auth.getAuth().currentUser?.uid!],
        onUpdate: (result) => {
          this.userDocument = <UserDocument>result.data();
          this.userHasProfile = result.exists;
          if(this.userHasProfile) {
            this.router.navigate(["postfeed"]);
          }
        }
      }
    );
  }

  onLogoutClick(){
    this.auth.signOut();
  }

  loggedIn() {
    return this.auth.isSignedIn();
  }

}

export interface UserDocument {
  publicName: string;
  description: string;
}
