describe('My First Test', () => {
  it('finds content "type"', () => {
    cy.visit('http://localhost:4200/')

    cy.contains('Login').click()
    //Should now be on Login Page
    //includes "/login" in the url
    cy.url().should('include', '/login')
    //get input and type into it
    //Note: cy.get has to use a class from the desired component's css file so I made a .user{} class in the login css file and applied it to the username input field
    cy.get('.user').type('fakeUser')
    //verify that the input was entered in desired form
    cy.get('.user').should('have.value', 'fakeUser')
  })
})