import express from "express";
import { User, Deck } from "../../../models/index.js";
import DeckSerializer from "../../../serializers/DeckSerializer.js";
import MtgExportToImport from "../../../scripts/MtgExportToImport.js";
import windowsTranslate from "../../../scripts/windowsTranslate.js";

const decksRouter = new express.Router();

decksRouter.get("/", async (req, res) => {
  const userId = req.user.id;
  const user = await User.query().findById(userId);
  try {
    const decks = await user.$relatedQuery("decks");
    const serializedDecks = DeckSerializer.cleanDecks(decks);

    res.status(200).json({ decks: serializedDecks });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

decksRouter.get("/:id", async (req, res) => {
  const deckId = req.params.id;
  try {
    const deck = await Deck.query().findById(deckId);
    const serializedDeck = DeckSerializer.cleanDeck(deck);

    return res.status(200).json({ deck: serializedDeck });
  } catch (err) {
    return res.status(500).json({ errors: err });
  }
});

decksRouter.patch("/:id", async (req, res) => {
  const newDeck = req.body.newDeck;

  const user = req.user;
  const deckId = req.params.id;

  const deck = await Deck.query().findById(deckId);
  const deckUserId = deck.userId;

  if (user.id === deckUserId) {
    try {
      const savedDeck = await deck.$query().patchAndFetch({
        ...newDeck,
      });
      res.status(200).json({ savedDeck });
    } catch (err) {
      res.status(500).json({ errors: err });
    }
  } else {
    res.status(401).json({ error: "not authorized to edit" });
  }
});

decksRouter.post("/import", async (req, res) => {
  try {
    let { deckText } = req.body;
    if (deckText.includes("Deck\r\n")) {
      deckText = deckText.replaceAll("\r\n", "\n");
    }
    if (deckText.includes("Deck\n")) {
      const deckObject = MtgExportToImport.mtgExportToObject(deckText);
      const importableDeck = await MtgExportToImport.DeckObjectToImport(deckObject);

      const user = req.user;
      const deckCount = await user.getDeckCount();
      const newDeckTotal = parseInt(deckCount) + 1;
      const newDeckName = `Deck ${newDeckTotal} (imported)`;

      const newDeck = await Deck.query().insertAndFetch({
        userId: user.id,
        name: newDeckName,
        cards: importableDeck,
      });
      return res.status(201).json({ newDeck });
    } else {
      throw new Error("incorrect import format");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error.message });
  }
});

decksRouter.delete("/:id", async (req, res) => {
  const userId = req.user.id;
  const deckId = req.params.id;

  const deck = await Deck.query().findById(deckId);
  const deckUserId = deck.userId;

  if (userId === deckUserId) {
    try {
      const deletedDecks = await Deck.query().deleteById(deckId);
      res.status(200).json({ deletedDecks });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  } else {
    res.status(401).json({ warning: "not authorized to delete deck" });
  }
});

export default decksRouter;
