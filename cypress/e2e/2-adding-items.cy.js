/// <reference types="cypress" />
// @ts-check

describe('Adding Items', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it('Load Homepage', () => {
        cy.contains('h1', 'todos')
    })

    it('Display 2 Items by default', () => {
        cy.get('.todo-list li').should('have.length', 2)

        cy.get('.todo-list li').first()
            .should('have.text', 'Pay electric bill')
        cy.get('.todo-list li').last()
            .should('have.text', 'Walk the dog')
    })

    it('Add 2 Items', () => {
        cy.get('.new-todo').type('First Item{Enter}')
        cy.contains('ul.todo-list', 'First Item').should('be.visible')
        cy.get('.new-todo').type('Second Item{Enter}')
        cy.contains('ul.todo-list', 'Second Item').should('be.visible')
        cy.get('.todo-list li').should('have.length', 4)
    })

    /**
    * Adds a todo item
    * @param {string} text
    */
    const addItem = (text) => {
        cy.get('.new-todo').type(`${text}{enter}`)
    }

    it('Add Items with Random text', () => {
        const randomLabel = `Item ${Math.random().toString()
            .slice(2, 14)}`

        addItem(randomLabel)
        cy.contains('.todo-list li', randomLabel)
            .should('be.visible')
            .and('not.have.class', 'completed')
    })

    it('Does Not Allow Adding Blank Todos', () => {
        cy.on('uncaught:exception', (e) => {
            return !e.message.includes('Cannot add a blank todo')
        })

        addItem(' ')
        cy.get('.todo-list li').should('not.have.text', ' ')
    })

    it('Add many Items', () => {
        const Total = 5
        for (let count = 0; count < Total; count += 1) {
            addItem(`item ${count}`)
        }
        // check number of items
        cy.get('.todo-list li').should('have.length.at.least', 5)
    })
})