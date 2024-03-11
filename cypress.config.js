const { defineConfig } = require('cypress');

// Define the isFileExist function
const isFileExist = (filePath) => {
  // Implement your logic to check if the file exists
  // For example:
  // return fs.existsSync(filePath);
};

// Define the findFiles function if it's not already defined
const findFiles = () => {
  // Implement your logic to find files
  // For example:
  // return someLogicToFindFiles();
};

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
      viewportWidth: 1366,
    viewportHeight: 768,
    testIsolation: false, // Set testIsolation to false for end-to-end tests
    setupNodeEvents(on, config) {
      // Make sure findFiles is defined before using it
      on("task", { isFileExist, findFiles });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
