const cucumber = require('cypress-cucumber-preprocessor').default;
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f5nnsk",
  e2e: {
    setupNodeEvents(on, config) {
      // Configuração para o Cucumber (apenas para arquivos .feature)
      on('file:preprocessor', cucumber());
      return config;
    },
    // Incluindo arquivos de teste .js e .feature
    specPattern: [
      "cypress/e2e/step_definitions/*.feature", // Cenários Gherkin
      "cypress/e2e/*.cy.js",  // Testes tradicionais (JS ou TS)
    ],
    video: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
    },
    baseUrl: "https://www.advantageonlineshopping.com", // URL base 
  },
});