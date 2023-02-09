/// <reference types="cypress" />
// @ts-check

describe('Load Homepage', () => {
  it('Load Homepage', () => {
    // visit Homepage
    cy.visit('https://example.cypress.io/todo')
  })

  it('Display Web Title & Default Todo', () => {
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
  })

  it('Show Expected Elements', () => {
    // https://on.cypress.io/get
    // assert Homepage elements
    cy.get('.new-todo').get('footer').should('exist')
  })

  it('Display Navigation Bar', () => {
    // assert Navigation Bar
    cy.get('.navbar-brand').should('have.text', 'cypress.io')
    cy.get('.navbar').contains('Commands').should('exist')
    cy.get('.navbar').contains('Utilities').should('exist')
    cy.get('.navbar').contains('Cypress API').should('exist')
  })

  it('Show Expected Elements using loop', () => {
    cy.visit('https://example.cypress.io/todo')

    const selectors = ['header', 'footer', '.new-todo', '.navbar-brand']
    selectors.forEach((selector) => {
      cy.get(selector).should('be.visible')
    })

  })
})