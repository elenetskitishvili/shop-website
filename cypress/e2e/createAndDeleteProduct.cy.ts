describe("Create and Delete Product", () => {
  const productName = "Test Product";

  beforeEach(() => {
    cy.fixture("user.json").then((userData) => {
      cy.login(userData.validEmail, userData.validPassword);
    });
    cy.get('[data-cy="products-link"]').click();
  });

  it("creates product successfully", () => {
    cy.get('[data-cy="create-product-link"]').click();

    cy.get('[data-cy="product-name-input"]').type(productName);
    cy.get('[data-cy="product-price-input"]').type("45.99");
    cy.get('[data-cy="product-description-input"]').type(
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    );
    cy.get('[data-cy="product-image-input"]').selectFile(
      "cypress/fixtures/005.avif",
      { force: true }
    );

    cy.get('[data-cy="create-product-button"]').click();
    cy.wait(3000);
    cy.get('[data-cy="product-creation-success-message"]').should("be.visible");
  });

  it("deletes product successfully", () => {
    cy.get('[data-cy="product-card"]').should("be.visible");
    cy.get('[data-cy="product-card"]')
      .contains(productName)
      .parents('[data-cy="product-card"]')
      .within(() => {
        cy.get('[data-cy="delete-product-button"]').click();
      });

    cy.get('[data-cy="product-card"]')
      .contains(productName)
      .should("not.exist");
  });
});
