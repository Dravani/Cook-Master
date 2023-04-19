import { FeedbackComponent } from "./feedback.component";
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
FirebaseTSApp.init(environment.firebaseConfig)

describe('CreatePostComponent', () => {

  it('Types in username field', () => {
    cy.mount(FeedbackComponent, {
      providers: [{provide: MatDialogRef, useValue:{}}],
      imports: [MatDialogModule],
    })
    cy.get('textarea').type('test typing into the feedback component')
    cy.get('textarea').should('have.value', 'test typing into the feedback component')

    
  })
})