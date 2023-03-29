import { NavbarComponent } from './navbar.component';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
import { Component } from '@angular/core';
FirebaseTSApp.init(environment.firebaseConfig)


describe('NavbarComponent', () => {

  it('Checks for navbar labels', () => {
    cy.mount(NavbarComponent)
    cy.get(':nth-child(2) > .nav-link').contains('Home')
    cy.get(':nth-child(3) > .nav-link').contains('Recipes')
    cy.get(':nth-child(4) > .nav-link').contains('Feed')
    cy.get(':nth-child(5) > .nav-link').contains('Login')
  })
})
