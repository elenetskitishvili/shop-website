describe("Purchase Product Flow", () => {
  beforeEach(() => {
    cy.fixture("user.json").then((userData) => {
      cy.login(userData.validEmail, userData.validPassword);
    });
    cy.get('[data-cy="products-link"]').click();
  });

  it("should take us to hosted checkout", () => {
    // cy.get('[data-cy="add-to-cart-button"]').first().click();
    // cy.get('[data-cy="cart-link"]').click();
    // cy.get('[data-cy="buy-button"]').click();
    cy.intercept("POST", "/api/create-checkout-session", {
      statusCode: 200,
      body: { id: "cs_test_mocked" }, // Mock response
    }).as("createSession");

    cy.window().then((win) => {
      cy.stub(win, "open").as("stripeRedirect");
    });

    cy.get('[data-cy="add-to-cart-button"]').first().click();
    cy.get('[data-cy="cart-link"]').click();
    cy.get('[data-cy="buy-button"]').click();

    cy.wait("@createSession");
    cy.get("@stripeRedirect").should(
      "be.calledWithMatch",
      /checkout.stripe.com/
    );
  });
});
