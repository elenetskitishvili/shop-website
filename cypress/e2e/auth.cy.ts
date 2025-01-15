describe("Auth", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.config("baseUrl")}/en/sign-in`);
  });

  const email = Cypress.env("validEmail");
  const password = Cypress.env("validPassword");

  it("Logs in successfully", () => {
    cy.login(email, password);
    cy.get('[data-cy="sign-out-button"]').should("be.visible");
  });

  it("Fails to log in", () => {
    cy.login(email, "incorrect");
    cy.url().should("not.eq", `${Cypress.config("baseUrl")}/en`);
  });

  it("Logs out successfully", () => {
    cy.login(email, password);
    cy.get('[data-cy="sign-out-button"]').click();
    cy.get('[data-cy="sign-out-button"]').should("not.exist");
  });
});
