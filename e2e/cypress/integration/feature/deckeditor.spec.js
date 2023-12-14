import testDeck1 from "../../fixtures/testDeck1";

describe("deckeditor component", () => {
  describe("searchbox component", () => {
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

        cy.login("user@example.com", "password");
        cy.get(".deck-image", { timeout: 10000 }).click().get(".edit-button").click();
      });
    });

    it("displays warning when search fails", () => {
      cy.get(".search-input").type("sad path");
      cy.get(".search-button").click();
      cy.get(".search-warning").should("have.text", "search failed: try searching by card name");
    });

    it("displays card images when a search succeeds", () => {
      cy.get(".search-input").type("omnath");
      cy.get(".search-button").click();
      cy.get(".new-card-tile").first().find("img").should("exist");
    });

    it("adds a card to the cards list", () => {
      cy.get(".search-input").type("omnath");
      cy.get(".search-button").click();
      cy.get(".new-card-tile").first().click();
      cy.get(".card-tile").first().should("have.text", "A-Omnath, Locus of Creation");
    });

    it("shows stats", () => {
      cy.get(".stats-button").click();
      cy.get(".stats-list").should("exist");
    });

    it("hides stats", () => {
      cy.get(".stats-button").click();
      cy.get(".stats-list").should("exist");
      cy.get(".stats-button").click();
      cy.get(".stats-list").should("not.exist");
    });
  });

  describe("cardbox component", () => {
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

        cy.login("user@example.com", "password");
        cy.get(".deck-image", { timeout: 10000 }).click().get(".edit-button").click();
      });
    });

    it("displays warning changing deck name to empty string", () => {
      cy.get(".edit-icon").click();
      cy.get(".new-name").submit();
      cy.get(".deck-name-warning").should("have.text", "Please enter a deck name");
    });

    it("changes deck name", () => {
      cy.get(".edit-icon").click();
      cy.get(".new-name").type("test name change").submit();
      cy.get(".deck-name").should("have.text", "test name change");
    });

    it("removes a card when clicked on", () => {
      cy.get(".card-tile").first().click();
      cy.get("span").should("have.text", "cards : 59");
    });

    it("returns to profile after clicking save & exit button", () => {
      cy.get(".save").click();
      cy.wait(2000);
      cy.url().should("eq", `${Cypress.config().baseUrl}/profile`);
    });
  });
});
