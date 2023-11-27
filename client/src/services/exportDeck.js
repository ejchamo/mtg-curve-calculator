import getDeckById from "./getDeckById.ts";

const exportDeck = (deck) => {
  const cardsToExport = {};
  const cardsInDeck = deck.cards.deck;
  cardsInDeck.forEach((card) => {
    if (cardsToExport[card.name]) {
      cardsToExport[card.name]++;
    } else {
      cardsToExport[card.name] = 1;
    }
  });

  let exportFormat = "deck\n";
  for (const key in cardsToExport) {
    const cardName = key.split("/")[0];
    exportFormat += `${cardsToExport[key]} ${cardName}\n`;
  }

  navigator.clipboard.writeText(exportFormat);
};

export default exportDeck;
