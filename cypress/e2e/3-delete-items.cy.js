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

    it('Delete an Item', () => {
        // adds a few items
        addItem('simple')
        addItem('hard')
        // deletes the first item
        cy.contains('.todo-list li', 'simple')
            .should('exist')
            .find('.destroy')
            // use force: true because we don't have the hover
            .click({ force: true })

        // confirm the deleted item is gone from the dom
        cy.contains('.todo-list li', 'simple').should('not.exist')
        // confirm the other item still exists
        cy.contains('.todo-list li', 'hard').should('exist')
    })

    it('Delete All Items one by one', () => {
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

    it('Delete All Items by clicking multiple elements', () => {
        // wait for the page to load the todos
        cy.wait(1000)
        // get all todo elements and their destroy buttons
        // (there might not be any!)
        // the click on them all at once
        // see https://on.cypress.io/click
        cy.get('.todo-list li .destroy')
            .should(Cypress._.noop)
            .then(($destroy) => {
                if ($destroy.length) {
                    cy.wrap($destroy).click({
                        force: true, multiple: true
                    })
                }
            })
        // confirm that the item is gone from the dom
        cy.get('.todo-list li').should('not.exist')
    })
})