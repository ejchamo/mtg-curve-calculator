import express from "express";
import got from "got";
import CardSerializer from "../../../serializers/CardSerializer.js";

const newCardsRouter = new express.Router();

newCardsRouter.get("/:name", async (req, res) => {
  const name = req.params.name;

  try {
    const response = await got(`https://api.scryfall.com/cards/search?q=name:${name}`);
    const body = JSON.parse(response.body);
    const cards = body.data;
    const serializedCards = CardSerializer.cleanCards(cards);
    res.status(200).json({ cards: serializedCards });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errors: error });
  }
});

export default newCardsRouter;
