/// <reference types="cypress" />
// @ts-check

describe('Manage Items', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it('Load Homepage', () => {
        cy.contains('h1', 'todos')
    })

    it('Add 2 Items', () => {

    })
})