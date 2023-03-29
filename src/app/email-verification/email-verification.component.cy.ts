import { EmailVerificationComponent } from "./email-verification.component";
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
FirebaseTSApp.init(environment.firebaseConfig)

describe('EmailVerificationComponent', () => {

  it('Types in username field', () => {
    cy.mount(EmailVerificationComponent)

    
  })
})
