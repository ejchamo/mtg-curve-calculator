import calculateCurve from "../scripts/calculateCurve.js";
import testDeck1 from "../db/seeders/testDeckData/testDeck1.js";

describe("calculateCurve function", () => {
  const testResults = calculateCurve(testDeck1.deck, 1000);

  it("returns an object", () => {
    expect(typeof testResults).toEqual("object");
  });

});
