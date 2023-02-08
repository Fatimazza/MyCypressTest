/// <reference types="cypress" />
// @ts-check

describe('Load Homepage', () => {
  it('Load Homepage', () => {
    cy.visit('https://example.cypress.io/todo')
  })
})