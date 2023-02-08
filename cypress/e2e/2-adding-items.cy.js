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
        cy.get('.new-todo').type('First Item{Enter}')
        cy.contains('ul.todo-list', 'First Item').should('be.visible')
        cy.get('.new-todo').type('Second Item{Enter}')
        cy.contains('ul.todo-list', 'Second Item').should('be.visible')
        cy.get('.todo-list li').should('have.length', 4)
    })
})