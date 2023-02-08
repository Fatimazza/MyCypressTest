/// <reference types="cypress" />
// @ts-check

describe('Load Homepage', () => {
  it('Load Homepage', () => {
    // visit Homepage
    cy.visit('https://example.cypress.io/todo')

    // https://on.cypress.io/get
    // assert Homepage elements
    cy.get('.new-todo').get('footer').should('exist')

    // assertion failed example
    // cy.contains('h1', 'Todos App')

    // https://on.cypress.io/contains
    // assert Homepage title using name
    cy.contains('h1', 'todos')
    // assert Homepage title using regular expression
    cy.contains('h1', /^todos$/)
    // assert Homepage title & element using data attribute
    // cy.contains('[data-cy="app-title"]', 'todos')
    // cy.get('[data-cy="app-title"]').should('have.text', 'todos')
    cy.get('[data-test="new-todo"]').should('have.text', '')

    // assert Navigation Bar
    cy.get('.navbar-brand').should('have.text', 'cypress.io')
    cy.get('.navbar').contains('Commands').should('exist')
    cy.get('.navbar').contains('Utilities').should('exist')
    cy.get('.navbar').contains('Cypress API').should('exist')
  })
})