import ScryfallClient from "../apiClient/ScryfallClient.js";

class MtgExportToImport {
  static mtgExportToObject(deckText) {
    const sections = deckText
      .split("\n\n")
      .map((section) => section.split("\n").filter((line) => line.trim() !== ""));

    const mainDeck = sections[0];
    mainDeck.shift();

    const deck = {
      cards: [],
    };

    mainDeck.forEach((line) => {
      const parts = line.split(" ");
      const card = {
        name: parts.slice(1, -2).join(" "),
        quantity: parseInt(parts[0], 10),
      };
      deck.cards.push(card);
    });

    return deck;
  }

  static async DeckObjectToImport(deckObject) {
    const cards = [];
    for (const card of deckObject.cards) {
      const importableCard = await ScryfallClient.getExactCard(card.name);
      for (let i = 0; i < card.quantity; i++) {
        cards.push(importableCard);
      }
    }

    return { deck: cards };
  }
}

export default MtgExportToImport;
