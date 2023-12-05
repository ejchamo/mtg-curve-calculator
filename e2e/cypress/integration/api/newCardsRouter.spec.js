describe("newCardsRouter API", () => {
  describe("GET /newCards/:name", () => {
    let cardName = "gruff";
    let cardName2 = "omnath";

    it("has the correct response type", () => {
      cy.request(`/api/v1/newCards/${cardName}`)
        .its("headers")
        .its("content-type")
        .should("include", "application/json");
    });

    it("return the correct status code", () => {
      cy.request(`/api/v1/newCards/${cardName}`).its("status").should("be.equal", 200);
    });

    //there is only one card in magic the gathering with the text 'gruff' in its name
    it("loads 1 card when searching gruff", () => {
      cy.request(`/api/v1/newCards/${cardName}`).its("body").its("cards").should("have.length", 1);
    });

    it("loads 7 cards when searching omnath", () => {
      cy.request(`/api/v1/newCards/${cardName2}`).its("body").its("cards").should("have.length", 7);
    });
  });
});
