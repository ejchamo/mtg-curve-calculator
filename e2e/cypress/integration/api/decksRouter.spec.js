import testDeck1 from "../../fixtures/testDeck1";
import deckImportString from "../../fixtures/deckImportString";

describe("decksRouter API", () => {
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

        cy.login("user@example.com", "password");
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

  describe("GET /decks/:id", () => {
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
      });
    });

    it("has the correct response type", () => {
      cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
        cy.request(`/api/v1/decks/${deck.id}`)
          .its("headers")
          .its("content-type")
          .should("include", "application/json");
      });
    });

    it("return the correct status code", () => {
      cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
        cy.request(`/api/v1/decks/${deck.id}`).its("status").should("be.equal", 200);
      });
    });

    it("loads the created deck", () => {
      cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
        cy.request(`/api/v1/decks/${deck.id}`)
          .its("body")
          .its("deck")
          .its("id")
          .should("be.equal", deck.id);
      });
    });
  });

  describe("Patch /decks/:id", () => {
    context("when a user patches their own deck", () => {
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
        });
      });

      it("has the correct response type", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          const newDeck = { ...deck, name: "test change" };
          cy.request({
            method: "PATCH",
            url: `/api/v1/decks/${deck.id}`,
            body: { newDeck },
          })
            .its("headers")
            .its("content-type")
            .should("include", "application/json");
        });
      });

      it("return the correct status code", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          const newDeck = { ...deck, name: "test change" };
          cy.request({
            method: "PATCH",
            url: `/api/v1/decks/${deck.id}`,
            body: { newDeck },
          })
            .its("status")
            .should("be.equal", 200);
        });
      });

      it("loads the created deck", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          const newDeck = { ...deck, name: "test change" };
          cy.request({
            method: "PATCH",
            url: `/api/v1/decks/${deck.id}`,
            body: { newDeck },
          })
            .its("body")
            .its("savedDeck")
            .its("name")
            .should("be.equal", "test change");
        });
      });
    });

    context("when a user patches another user's deck", () => {
      beforeEach(() => {
        cy.task("db:truncate", "User");
        cy.task("db:insert", {
          modelName: "User",
          json: { email: "extrauser@example.com", password: "password" },
        }).then((extraUser) => {
          const deckData = {
            userId: extraUser.id,
            name: "extra deck",
            cards: testDeck1,
          };
          cy.task("db:truncate", "Deck");
          cy.task("db:insert", { modelName: "Deck", json: deckData });
        });
        cy.task("db:insert", {
          modelName: "User",
          json: { email: "user@example.com", password: "password" },
        }).then((insertedUser) => {
          const deckData = {
            userId: insertedUser.id,
            name: "Sultai Midrange",
            cards: testDeck1,
          };

          cy.task("db:insert", { modelName: "Deck", json: deckData });
        });

        cy.login("user@example.com", "password");
      });

      it("has the correct response type", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          const newDeck = { ...deck, name: "test change" };
          cy.request({
            method: "PATCH",
            url: `/api/v1/decks/${deck.id}`,
            body: { newDeck },
            failOnStatusCode: false,
          })
            .its("headers")
            .its("content-type")
            .should("include", "application/json");
        });
      });

      it("return the correct status code", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          const newDeck = { ...deck, name: "test change" };
          cy.request({
            method: "PATCH",
            url: `/api/v1/decks/${deck.id}`,
            body: { newDeck },
            failOnStatusCode: false,
          })
            .its("status")
            .should("be.equal", 401);
        });
      });

      it("returns an error", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          const newDeck = { ...deck, name: "test change" };
          cy.request({
            method: "PATCH",
            url: `/api/v1/decks/${deck.id}`,
            body: { newDeck },
            failOnStatusCode: false,
          })
            .its("body")
            .its("error")
            .should("be.equal", "not authorized to edit");
        });
      });
    });
  });

  describe("POST decks/import", () => {
    context("when posting successfully", () => {
      beforeEach(() => {
        cy.task("db:truncate", "User");
        cy.task("db:insert", {
          modelName: "User",
          json: { email: "user@example.com", password: "password" },
        });
        cy.login("user@example.com", "password");
      });

      it("has the correct response type", () => {
        cy.request({
          method: "POST",
          url: `/api/v1/decks/import`,
          body: { deckText: deckImportString },
        })
          .its("headers")
          .its("content-type")
          .should("include", "application/json");
      });

      it("return the correct status code", () => {
        cy.request({
          method: "POST",
          url: `/api/v1/decks/import`,
          body: { deckText: deckImportString },
        })
          .its("status")
          .should("be.equal", 201);
      });

      it("loads the created deck", () => {
        cy.request({
          method: "POST",
          url: `/api/v1/decks/import`,
          body: { deckText: deckImportString },
        })
          .its("body")
          .its("newDeck")
          .its("name")
          .should("be.equal", "Deck 1 (imported)");
      });
    });

    context("when posting unsuccessfully", () => {
      beforeEach(() => {
        cy.task("db:truncate", "User");
        cy.task("db:insert", {
          modelName: "User",
          json: { email: "user@example.com", password: "password" },
        });
        cy.login("user@example.com", "password");
      });

      it("has the correct response type", () => {
        cy.request({
          method: "POST",
          url: `/api/v1/decks/import`,
          body: { deckText: "random string meant to fail" },
          failOnStatusCode: false,
        })
          .its("headers")
          .its("content-type")
          .should("include", "application/json");
      });

      it("return the correct status code", () => {
        cy.request({
          method: "POST",
          url: `/api/v1/decks/import`,
          body: { deckText: "random string meant to fail" },
          failOnStatusCode: false,
        })
          .its("status")
          .should("be.equal", 500);
      });

      it("returns an error", () => {
        cy.request({
          method: "POST",
          url: `/api/v1/decks/import`,
          body: { deckText: "random string meant to fail" },
          failOnStatusCode: false,
        })
          .its("body")
          .its("errors")
          .should("be.equal", "incorrect import format");
      });
    });
  });

  describe("DELETE /decks/:id", () => {
    context("when deleting successfully", () => {
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
        });
      });

      it("has the correct response type", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          cy.request({
            method: "DELETE",
            url: `/api/v1/decks/${deck.id}`,
          })
            .its("headers")
            .its("content-type")
            .should("include", "application/json");
        });
      });

      it("has the correct response type", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          cy.request({
            method: "DELETE",
            url: `/api/v1/decks/${deck.id}`,
          })
            .its("status")
            .should("be.equal", 200);
        });
      });

      it("returns the number of deleted decks", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          cy.request({
            method: "DELETE",
            url: `/api/v1/decks/${deck.id}`,
          })
            .its("body")
            .its("deletedDecks")
            .should("be.equal", 1);
        });
      });
    });

    context("when deleting unsuccessfully", () => {
      beforeEach(() => {
        cy.task("db:truncate", "User");
        cy.task("db:insert", {
          modelName: "User",
          json: { email: "extrauser@example.com", password: "password" },
        }).then((extraUser) => {
          const deckData = {
            userId: extraUser.id,
            name: "extra deck",
            cards: testDeck1,
          };
          cy.task("db:truncate", "Deck");
          cy.task("db:insert", { modelName: "Deck", json: deckData });
        });
        cy.task("db:insert", {
          modelName: "User",
          json: { email: "user@example.com", password: "password" },
        }).then((insertedUser) => {
          const deckData = {
            userId: insertedUser.id,
            name: "Sultai Midrange",
            cards: testDeck1,
          };

          cy.task("db:insert", { modelName: "Deck", json: deckData });
        });

        cy.login("user@example.com", "password");
      });

      it("has the correct response type", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          cy.request({
            method: "DELETE",
            url: `/api/v1/decks/${deck.id}`,
            failOnStatusCode: false,
          })
            .its("headers")
            .its("content-type")
            .should("include", "application/json");
        });
      });

      it("return the correct status code", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          cy.request({
            method: "DELETE",
            url: `/api/v1/decks/${deck.id}`,
            failOnStatusCode: false,
          })
            .its("status")
            .should("be.equal", 401);
        });
      });

      it("returns an error", () => {
        cy.task("db:findFirst", { modelName: "Deck" }).then((deck) => {
          cy.request({
            method: "DELETE",
            url: `/api/v1/decks/${deck.id}`,
            failOnStatusCode: false,
          })
            .its("body")
            .its("warning")
            .should("be.equal", "not authorized to delete deck");
        });
      });
    });
  });
});
