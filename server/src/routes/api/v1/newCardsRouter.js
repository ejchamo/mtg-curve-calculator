import express from "express";
import ScryfallClient from "../../../apiClient/ScryfallClient.js";

const newCardsRouter = new express.Router();

newCardsRouter.get("/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const cards = await ScryfallClient.searchByName(name);
    res.status(200).json({ cards });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

export default newCardsRouter;
