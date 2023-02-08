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

    it('Delete All Items', () => {
        // wait for the page to load the todos
        cy.wait(1000)
        // get all todo items (there might not be any!)
        cy.get('.todo-list li')
            .should(Cypress._.noop)
            // for each todo item click the remove button
            .each(($item) => {
                cy.wrap($item).find('.destroy').click({
                    force: true
                })
            })
        // confirm that the item is gone from the dom
        cy.get('.todo-list li').should('not.exist')
    })
})