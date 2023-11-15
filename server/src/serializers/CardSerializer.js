class CardSerializer {
  static cleanCard(card) {
    const allowedAttributes = ["object", "id", "name", "image_uris", "cmc", "type_line"];

    const serializedCard = {};

    for (const attribute of allowedAttributes) {
      serializedCard[attribute] = card[attribute];
    }
    return serializedCard;
  }

  static cleanCards(cards) {
    const allowedAttributes = ["object", "id", "name", "image_uris", "cmc", "type_line"];

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
