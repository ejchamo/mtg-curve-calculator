import express from "express";
import { User } from "../../../models/index.js";
import DeckSerializer from "../../../serializers/DeckSerializer.js";

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

export default decksRouter;
