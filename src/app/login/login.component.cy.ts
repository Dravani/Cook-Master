
import { LoginComponent } from './login.component';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
FirebaseTSApp.init(environment.firebaseConfig)

describe('LoginComponent', () => {

  it('Types in username field', () => {
    cy.mount(LoginComponent)

    cy.get('.user').type('edwin.a.salcedo02@gmail.com')
    cy.get('.user').should('have.value', 'edwin.a.salcedo02@gmail.com')
    //in cypress window you can use it to find the 'class' of a thing if it doesn't have an assigned class
    cy.get(':nth-child(2) > input').type('vm1357eaS')
    cy.get(':nth-child(2) > input').should('have.value', 'vm1357eaS')

    cy.get('mat-card-actions > :nth-child(2)').click()
    cy.get('.user').type('edwin.a.salcedo02@gmail.com')
    cy.get('.user').should('have.value', 'edwin.a.salcedo02@gmail.com')
    cy.get(':nth-child(2) > input').type('vm1357eaS')
    cy.get(':nth-child(2) > input').should('have.value', 'vm1357eaS')
    cy.get(':nth-child(3) > input').type('vm1357eaS')
    cy.get(':nth-child(3) > input').should('have.value', 'vm1357eaS')

    cy.get('mat-card-actions > :nth-child(1)').click()
    cy.get('.user').type('edwin.a.salcedo02@gmail.com')
    cy.get('.user').should('have.value', 'edwin.a.salcedo02@gmail.com')
  })
})
