const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      // implement node event listeners here
    },
  },
  experimentalWebKitSupport: true,
  video:false,
  projectId: "eaw8oh"
});
