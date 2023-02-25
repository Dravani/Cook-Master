
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  it('Types in username field', () => {
    cy.mount(LoginComponent)
    cy.get('.user').type('fakeUser')
    cy.get('.user').should('have.value', 'fakeUser')
    //in cypress window you can use it to find the 'class' of a thing if it doesn't have an assigned class
    cy.get(':nth-child(2) > input').type('fakePass123')
    cy.get(':nth-child(2) > input').should('have.value', 'fakePass123')
  })
})
