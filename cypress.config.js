const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrlProd: 'https://example.cypress.io/todo',
    baseUrlStage: 'http://localhost:3000'
  },
  e2e: {
    baseUrl: 'https://example.cypress.io',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
