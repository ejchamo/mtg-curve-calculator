import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";
import { Deck } from "../models/index.js";

const router = new express.Router();

const clientRoutes = ["/", "/user-sessions/new", "/users/new"];

const authedClientRoutes = ["/profile"];
const authedEditClientRoutes = ["/deckeditor/:id"];

router.get(authedClientRoutes, (req, res) => {
  if (req.user) {
    res.sendFile(getClientIndexPath());
  } else {
    res.redirect("/user-sessions/new");
  }
});

router.get(authedEditClientRoutes, async (req, res) => {
  const deckId = req.params.id;
  const deck = await Deck.query().findById(deckId);
  if (deck && req.user.id === deck.userId) {
    res.sendFile(getClientIndexPath());
  } else {
    res.redirect("/profile");
  }
});

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;
