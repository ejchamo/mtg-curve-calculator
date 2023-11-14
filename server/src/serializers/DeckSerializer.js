class DeckSerializer {
  static cleanDecks(decks) {
    const allowedAttributes = ["id", "name", "cards", "userId"];

    const serializedDecks = decks.map((deck) => {
      const serializedDeck = {};
      for (const attribute of allowedAttributes) {
        serializedDeck[attribute] = deck[attribute];
      }
      return serializedDeck;
    });

    return serializedDecks;
  }
}

export default DeckSerializer;
