/// <reference types="cypress" />
// @ts-check

describe('Load Homepage', () => {
  it('Load Homepage', () => {
    // visit web page
    cy.visit('https://example.cypress.io/todo')

    // https://on.cypress.io/get
    // assert homepage components
    cy.get('.new-todo').get('footer').should('exist')

    // assertion failed example
    // cy.contains('h1', 'Todos App')
  })
})