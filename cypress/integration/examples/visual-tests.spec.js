
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

addMatchImageSnapshotCommand();


describe('Visual regression tests', () => {
    it('Should match previous screenshot "about Page"', () => {
      cy.visit('https://www.lloydsbank.com/')
      cy.matchImageSnapshot();

    })
    it('Should match previous screenshot "skills Page"', () => {
        cy.visit('https://www.lloydsbank.com//')
        cy.matchImageSnapshot()
      })


      
  })