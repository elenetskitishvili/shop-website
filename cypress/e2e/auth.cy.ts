describe("Auth", () => {
  let email: string;
  let password: string;
  let invalidPassword: string;
  beforeEach(() => {
    cy.fixture("user.json").then((userData) => {
      email = userData.validEmail;
      password = userData.validPassword;
      invalidPassword = userData.invalidPassword;
    });
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
