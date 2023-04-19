import { CreatePostComponent } from "./create-post.component";
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
import { MatDialog, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
FirebaseTSApp.init(environment.firebaseConfig)

describe('CreatePostComponent', () => {

  it('Types in username field', () => {
    cy.mount(CreatePostComponent, {
      providers: [{provide: MatDialogRef, useValue:{}}],
      imports: [MatDialogModule],
    })
    cy.get('textarea').type('test typing into the createPost component')
    cy.get('textarea').should('have.value', 'test typing into the createPost component')

    cy.get('mat-icon').should('be.visible')
    cy.get('mat-card-actions > :nth-child(2)').should('be.visible')
  })
})
