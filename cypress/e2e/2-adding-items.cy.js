/// <reference types="cypress" />
// @ts-check

describe('Load Homepage', () => {

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
})

describe('Adding Items', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    })

    it('Add one more Items', () => {
        // make sure the application has loaded first
        cy.wait(1000)
        // take the initial number of items (could be zero!)
        // add one more todo via UI
        // take the new number of items
        // confirm it is the initial number + 1
        cy.get('.todo-list li')
            .should(Cypress._.noop)
            .its('length')
            .then((n) => {
                addItem('My New Item')
                // now we for sure have at least one item
                cy.get('.todo-list li').should('have.length', n + 1)
            })
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

    it.only('Add many Items', () => {
        const Total = 5
        for (let count = 0; count < Total; count += 1) {
            addItem(`item ${count}`)
        }
        cy.log('** complete items **')

        // check number of items
        cy.get('.todo-list li').should('have.length.at.least', 5)
    })

    it('Does Not Allow Adding Blank Todos', () => {
        cy.on('uncaught:exception', (e) => {
            // what will happen if this assertion fails?
            // will the test fail?
            // expect(e.message).to.include('Cannot add a blank todo')
            // return false

            // a better shortcut
            return !e.message.includes('Cannot add a blank todo')
        })

        addItem(' ')
        cy.get('.todo-list li').should('not.have.text', ' ')
    })

    it('Disables the built-in Assertion', () => {
        // try to get a non-existent element
        // without failing the test
        // pass it to the `.then($el)` callback
        // to check it yourself
        cy.get('does-not-exist')
            .should(Cypress._.noop)
            .then(($el) => {
                if (!$el.length) {
                    cy.log('There is no element')
                }
            })
    })
})