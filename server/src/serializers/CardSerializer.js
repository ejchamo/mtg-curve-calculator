class CardSerializer {
  static cleanCards(cards) {
    const allowedAttributes = [
      "object",
      "id",
      "name",
      "uri",
      "scryfall_uri",
      "image_uris",
      "mana_cost",
      "cmc",
      "type_line",
      "colors",
      "color_identity",
      "legalities",
      "set",
      "set_name",
      "rarity",
    ];

    const serializedCards = cards.map((card) => {
      const serializedCard = {};
      for (const attribute of allowedAttributes) {
        serializedCard[attribute] = card[attribute];
      }
      return serializedCard;
    });

    return serializedCards;
  }
}

export default CardSerializer;
