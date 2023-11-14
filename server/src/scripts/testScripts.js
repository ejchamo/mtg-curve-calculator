import calculateCurve from "./calculateCurve.js";
import testDeck1 from "../db/seeders/testDeckData/testDeck1.js";

const testStats = calculateCurve(testDeck1.deck, 1000);

console.log(testStats);
