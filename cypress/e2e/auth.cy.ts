describe("Auth", () => {
  let email: string;
  let password: string;
  let invalidPassword: string;
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}/en/sign-in`);
    cy.fixture("user.json").then((userData) => {
      email = userData.validEmail;
      password = userData.validPassword;
      invalidPassword = userData.invalidPassword;
    });
  });

  it("signs up successfully", () => {
    cy.get('[data-cy="sign-up-link"]').click();
    cy.get('[data-cy="signup-email-input"]').type("elene@gmail.com");
    cy.get('[data-cy="signup-password-input"]').type(password);
    cy.get('[data-cy="sign-up-button"]').click();

    cy.login("elene@gmail.com", password);
    cy.get('[data-cy="sign-out-button"]').should("be.visible");
  });
  it("Logs in successfully", () => {
    cy.login(email, password);
    cy.get('[data-cy="sign-out-button"]').should("be.visible");
  });

  it("Fails to log in", () => {
    cy.login(email, invalidPassword);
    cy.url().should("not.eq", `${Cypress.config("baseUrl")}/en`);
  });

  it("Logs out successfully", () => {
    cy.login(email, password);
    cy.get('[data-cy="sign-out-button"]').click();
    cy.get('[data-cy="sign-out-button"]').should("not.exist");
  });
});
