/// <reference types="cypress" />
// @ts-check

const baseUrlProd = Cypress.env('baseUrlProd')

describe('Delete Items', () => {

    /**
    * Adds a todo item
    * @param {string} text
    */
    const addItem = (text) => {
        cy.get('.new-todo').type(`${text}{enter}`)
    }

    // Base Url on Config Env
    /* beforeEach(() => {
        cy.log('Visiting', baseUrlProd)
        cy.visit(baseUrlProd)
    }) */

    // Base Url on Config E2E
    beforeEach(() => {
        cy.log('Visiting', Cypress.config('baseUrl'))
        // cy.visit('/')
        cy.visit('/todo')
    })

    it('Load Homepage', () => {
        cy.contains('h1', 'todos')
    })
})