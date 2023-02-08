/// <reference types="cypress" />
// @ts-check

const baseUrlProd = Cypress.env('baseUrlProd')

describe('Delete Items', () => {

    beforeEach(() => {
        cy.log('Visiting', baseUrlProd)
        cy.visit(baseUrlProd)
    })

    it('Load Homepage', () => {
        cy.contains('h1', 'todos')
    })
})