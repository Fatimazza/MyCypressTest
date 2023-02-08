/// <reference types="cypress" />
// @ts-check

const baseUrl = Cypress.env('baseUrl')

describe('Delete Items', () => {

    beforeEach(() => {
        cy.log('Visiting', baseUrl)
        cy.visit(baseUrl)
    })

    it('Load Homepage', () => {
        cy.contains('h1', 'todos')
    })
})