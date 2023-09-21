const { defineConfig } = require("cypress");
const cucumber = require ("cypress-cucumber-preprocessor").default;
const fs = require("fs-extra");
const path = require("path");

const fetchConfigurationByFile = file => {
const pathOfConfigurationFile = `BDD-Cucumber/cypress/config/cypress.${file}.json`;

  return (
      file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
    );
};


module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber())
      const environment = config.env.configFile || "testEnv";
      const configurationForEnvironment = fetchConfigurationByFile(environment);
      return configurationForEnvironment || config;
    },
  },
});
