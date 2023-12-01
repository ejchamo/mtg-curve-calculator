import calculateCurve from "../scripts/calculateCurve.js";
import testDeck1 from "../db/seeders/testDeckData/testDeck1.js";
import testDeckLands from "../db/seeders/testDeckData/testDeckLands.js";
import testDeckOneCosts from "../db/seeders/testDeckData/testDeckOneCosts.js";

describe("calculateCurve function", () => {
  describe("basic output of function", () => {
    const testResults = calculateCurve(testDeck1.deck, 1000);

    it("returns an object", () => {
      expect(typeof testResults).toEqual("object");
    });

    it("returns an object with 6 keys", () => {
      const keys = Object.keys(testResults);
      expect(keys.length).toEqual(6);
    });

    it("returns an object with 6 keys that are the numbers 1 through 6", () => {
      const keys = Object.keys(testResults);
      expect(keys[0]).toEqual("1");
      expect(keys[1]).toEqual("2");
      expect(keys[2]).toEqual("3");
      expect(keys[3]).toEqual("4");
      expect(keys[4]).toEqual("5");
      expect(keys[5]).toEqual("6");
    });
  });

  describe("lands only deck results", () => {
    const testResults = calculateCurve(testDeckLands.deck, 1000);

    it("returns a 100% chance of drawing land cards", () => {
      for (const turn in testResults) {
        expect(testResults[turn].lands).toEqual("100.00");
      }
    });

    it("returns no results for cmc (converted mana cost)", () => {
      for (const turn in testResults) {
        expect(testResults[turn].cmc1).toEqual(undefined);
        expect(testResults[turn].cmc2).toEqual(undefined);
        expect(testResults[turn].cmc3).toEqual(undefined);
        expect(testResults[turn].cmc4).toEqual(undefined);
        expect(testResults[turn].cmc5).toEqual(undefined);
        expect(testResults[turn].cmc6).toEqual(undefined);
      }
    });
  });

  //In a deck with 6 lands and 6 cards that cost 1 land to play, it should always be possible to play a 1 cost card
  describe("6 lands 6 cmc1 deck results", () => {
    const testResults = calculateCurve(testDeckOneCosts.deck, 1000);

    it("returns a 100% chance of cmc1 being playable", () => {
      for (const turn in testResults) {
        expect(testResults[turn].cmc1).toEqual("100.00");
      }
    });

    it("returns no results for cmc2 through cmc6", () => {
      for (const turn in testResults) {
        expect(testResults[turn].cmc2).toEqual(undefined);
        expect(testResults[turn].cmc3).toEqual(undefined);
        expect(testResults[turn].cmc4).toEqual(undefined);
        expect(testResults[turn].cmc5).toEqual(undefined);
        expect(testResults[turn].cmc6).toEqual(undefined);
      }
    });
  });
});
