describe("Create Product", () => {
  beforeEach(() => {
    cy.fixture("user.json").then((userData) => {
      cy.login(userData.validEmail, userData.validPassword);
    });
    cy.get('[data-cy="products-link"]').click();
  });

  it("creates product successfully", () => {
    cy.get('[data-cy="create-product-link"]').click();

    // fill in the form
    cy.get('[data-cy="product-name-input"]').type("Test Product");
    cy.get('[data-cy="product-price-input"]').type("45.99");
    cy.get('[data-cy="product-description-input"]').type(
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    );
    cy.get('[data-cy="product-image-input"]').selectFile(
      "cypress/fixtures/005.avif",
      { force: true }
    );

    cy.get('[data-cy="create-product-button"]').click();
    cy.get('[data-cy="product-creation-success-message"]').should("be.visible");
  });
});
