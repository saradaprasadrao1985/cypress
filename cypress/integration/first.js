
/// <reference types="cypress" />


describe('My First Test',function()  
{

    it('Google Home Page',function()  {
      cy.visit('https://www.google.com')
      cy.title().should('eq','Google')
      cy.get(".gLFyf ").type("cypress tutorial")
      .type('{enter}')
       
    })
  })