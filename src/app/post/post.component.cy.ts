import { PostComponent } from './post.component';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
import { MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { Input } from '@angular/core';

FirebaseTSApp.init(environment.firebaseConfig)
export interface PostData {
  comment: string;
  creatorId: string;
  imageUrl?: string;
}

describe('PostComponent', () => {

  it('Temp', () => {

    cy.mount(PostComponent, {
      providers: [MatDialogModule, MatDialog, FirebaseTSFirestore],
      imports: [MatDialogModule],
      
    })
    
  })
  
})


