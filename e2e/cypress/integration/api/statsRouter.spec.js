import testDeck1 from "../../fixtures/testDeck1";

describe("statsRouter API", () => {
  describe("POST /stats/", () => {
    it("has the correct response type", () => {
      cy.request({
        method: "POST",
        url: `/api/v1/stats/`,
        body: { deck: testDeck1.deck },
      })
        .its("headers")
        .its("content-type")
        .should("include", "application/json");
    });

    it("return the correct status code", () => {
      cy.request({
        method: "POST",
        url: `/api/v1/stats/`,
        body: { deck: testDeck1.deck },
      })
        .its("status")
        .should("be.equal", 200);
    });

    it("returns the stats object", () => {
      cy.request({
        method: "POST",
        url: `/api/v1/stats/`,
        body: { deck: testDeck1.deck },
      })
        .its("body")
        .should("have.key", "stats");
    });
  });
});
