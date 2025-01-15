import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    env: {
      validEmail: "elene.tskitishvili504@gmail.com",
      validPassword: "asdf1234",
    },
  },
});
