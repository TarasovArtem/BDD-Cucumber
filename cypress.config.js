const { defineConfig } = require("cypress");
const cucumber = require ("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ecommerce-playground.lambdatest.io/",
    specPattern: "**/*.feature",
    "execTimeout": 300000,
    "defaultCommandTimeout": 60000,
    "requestTimeout": 20000,
    "pageLoadTimeout": 60000,
    "responseTimeout": 20000,
    "viewportWidth": 1200,
    "viewportHeight": 1200,
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
    },
  },
});
