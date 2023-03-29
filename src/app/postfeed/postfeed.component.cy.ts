
import { PostfeedComponent } from './postfeed.component';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
import { MatDialogModule, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { CreatePostComponent } from '../create-post/create-post.component';
import { NavbarComponent } from '../navbar/navbar.component';

FirebaseTSApp.init(environment.firebaseConfig)

describe('PostfeedComponent', () => {

  it('Temp', () => {

    cy.mount(PostfeedComponent, {
      providers: [MatDialogModule, MatDialog, CreatePostComponent],
      imports: [MatDialogModule]
    })
    
  })
  
})


