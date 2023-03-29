describe('My First Test', () => {
  it('finds content "type"', () => {
    cy.visit('http://localhost:4200/')

    cy.get('.banner > .mdc-button > .mdc-button__label').click()

    //Should now be on Login Page
    //includes "/login" in the url
    cy.url().should('include', '/login')
    //get input and type into it
    cy.get('.user').type('edwin.a.salcedo02@gmail.com')
    //verify that the input was entered in desired form
    cy.get('.user').should('have.value', 'edwin.a.salcedo02@gmail.com')
    cy.get('.mat-mdc-form-field.ng-tns-c78-1 > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type('vm1357eaS')
    cy.wait(0)
    cy.get('.login-form > .mdc-button > .mdc-button__label').should('be.visible').click({force:true})

    cy.url().should('include', '/postfeed')
    // cy.get(':nth-child(1) > div.spacingcard > .mat-mdc-card > .mat-mdc-card-image').scrollIntoView({duration:5000}).should('be.visible')

    cy.get('#post-button > .mat-mdc-button-touch-target').click()

    //cy.get('.mat-mdc-card-actions > .mdc-button > .mat-mdc-button-touch-target').click()
    //cy.get('div[_ngcontent-adb-c152=""] > textarea').click().type('Posting works!')
    //cy.get('div[_ngcontent-fqv-c152=""] > textarea').click().type('Posting works!')
  })
})
