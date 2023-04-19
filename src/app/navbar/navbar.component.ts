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
  private static userDocument: UserDocument;//private static doesnt allow !

  constructor(private router: Router) {
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {

            },
            whenSignedOut: user => {
              alert("Logged Out");
              NavbarComponent.userDocument = null!;
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

  public static getUserDocument(){
    return NavbarComponent.userDocument;
  }
  getUsername() {
    try {
      return NavbarComponent.userDocument.publicName;
    } catch (err) {

    }
  }
  getUserProfile() {
    this.firestore.listenToDocument(
      {
        name: "Getting Document",
        path: ["Users", this.auth.getAuth().currentUser?.uid!],
        onUpdate: (result) => {
          NavbarComponent.userDocument = <UserDocument>result.data();
          this.userHasProfile = result.exists;
          NavbarComponent.userDocument.userId = this.auth.getAuth().currentUser?.uid!;
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
  userId: string;
}
