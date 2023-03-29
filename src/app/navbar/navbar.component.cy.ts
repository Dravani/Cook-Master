import { NavbarComponent } from './navbar.component';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environment/environment';
import { Component } from '@angular/core';
FirebaseTSApp.init(environment.firebaseConfig)


describe('NavbarComponent', () => {

  it('Types in username field', () => {
    cy.mount(NavbarComponent)
  })
})
