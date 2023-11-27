import testDeck1 from "../../fixtures/testDeck1";

describe("GET /decks", () => {
  beforeEach(() => {
    cy.task("db:truncate", "User");
    cy.task("db:insert", {
      modelName: "User",
      json: { email: "user@example.com", password: "password" },
    }).then((insertedUser) => {
      const deckData = {
        userId: insertedUser.id,
        name: "Sultai Midrange",
        cards: testDeck1,
      };

      cy.task("db:truncate", "Deck");
      cy.task("db:insert", { modelName: "Deck", json: deckData });
    });

    cy.visit("/user-sessions/new");
    cy.get("form").within(() => {
      cy.findByLabelText("Email").type("user@example.com");

      cy.findByLabelText("Password").type("password");

      cy.root().submit();
    });
  });

  it("has the correct response type", () => {
    cy.request("/api/v1/decks")
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });

  it("return the correct status code", () => {
    cy.request("/api/v1/decks").its("status").should("be.equal", 200);
  });

  it("loads 1 deck", () => {
    cy.request("/api/v1/decks").its("body").its("decks").should("have.length", 1);
  });
});
