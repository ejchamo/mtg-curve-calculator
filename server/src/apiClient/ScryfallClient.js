import got from "got";
import CardSerializer from "../serializers/CardSerializer.js";

class ScryfallClient {
  static async searchByName(name) {
    const response = await got(`https://api.scryfall.com/cards/search?q=name:${name}`);

    const body = JSON.parse(response.body);
    const cards = body.data;

    const serializedCards = CardSerializer.cleanCards(cards);

    return serializedCards;
  }

  static async getExactCard(name) {
    const response = await got(`https://api.scryfall.com/cards/named?exact=${name}`);
    const body = JSON.parse(response.body);
    const serializedCard = CardSerializer.cleanCard(body);
    return serializedCard;
  }
}

export default ScryfallClient;
