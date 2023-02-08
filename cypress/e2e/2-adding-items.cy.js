/// <reference types="cypress" />
// @ts-check

describe('Manage Items', () => {

    it('Load Homepage', () => {
        cy.visit('https://example.cypress.io/todo')
        cy.contains('h1', 'todos')
    })

    it('Add 2 Items', () => {
        cy.visit('https://example.cypress.io/todo')
    })
})