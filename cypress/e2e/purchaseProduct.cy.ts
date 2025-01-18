describe("Purchase Product Flow", () => {
  beforeEach(() => {
    cy.fixture("user.json").then((userData) => {
      cy.login(userData.validEmail, userData.validPassword);
    });

    cy.intercept("POST", "**/actions/stripe", {
      statusCode: 200,
      body: { url: "/cart/result?session_id=fake_session_id" },
    }).as("createCheckoutSession");

    cy.intercept("POST", "**/cart/result?*", {
      statusCode: 200,
      body: { error: false },
    }).as("confirmPayment");
  });

  it("should complete a product purchase and appear in orders", () => {
    cy.get('[data-cy="products-link"]').click();
    cy.url().should("include", "/products");

    cy.get("[data-cy='product-card']")
      .first()
      .find("[data-cy='product-name']")
      .invoke("text")
      .then((productName) => {
        cy.get("[data-cy='add-to-cart-button']").first().click();
        cy.get("[data-cy='cart-link']").click();

        cy.get("[data-cy='buy-button']").should("not.be.disabled").click();
      });
  });
});
