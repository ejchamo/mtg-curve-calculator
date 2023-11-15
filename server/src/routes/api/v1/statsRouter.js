import express from "express";
import calculateCurve from "../../../scripts/calculateCurve.js";

const statsRouter = new express.Router();

statsRouter.post("/", (req, res) => {
  const { deck } = req.body;

  const stats = calculateCurve(deck, 1000);

  try {
    res.status(200).json({ stats });
  } catch (error) {
    res.status(500).json({ errors: error });
  }
});

export default statsRouter;
