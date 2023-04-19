import { EmailVerificationComponent } from "./email-verification.component";
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
FirebaseTSApp.init(environment.firebaseConfig)

describe('EmailVerificationComponent', () => {

  it('shows the amil verify screen', () => {
    cy.mount(EmailVerificationComponent)
    
    cy.get('h1').contains('Your Email is not verified')
    cy.get('button').contains('Resend Verification Email')
  })
})
