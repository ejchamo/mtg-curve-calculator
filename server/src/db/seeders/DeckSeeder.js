import { Deck, User } from "../../models/index.js";
import testDeck1 from "./testDeckData/testDeck1.js";
import testDeck2 from "./testDeckData/testDeck2.js";

class DeckSeeder {
  static async seed() {
    const testUser = await User.query().findOne({ email: "test@gmail.com" });

    const decksData = [
      {
        userId: testUser.id,
        name: "test green deck",
        cards: testDeck1,
      },
      {
        userId: testUser.id,
        name: "test green deck 2",
        cards: testDeck2,
      },
    ];

    for (const deck of decksData) {
      const currentDeck = await Deck.query().findOne({ name: deck.name });
      if (!currentDeck) {
        await Deck.query().insert(deck);
      }
    }
  }
}

export default DeckSeeder;
