import _ from "lodash";

function calculateCurve(deck, numSimulations) {
  const results = {
    1: { lands: 0 },
    2: { lands: 0 },
    3: { lands: 0 },
    4: { lands: 0 },
    5: { lands: 0 },
    6: { lands: 0 },
  };

  for (let sim = 1; sim <= numSimulations; sim++) {
    const testObject = { lands: 0 };
    const shuffledDeck = _.shuffle(deck.slice());

    const hand = [];

    for (let dealtCards = 1; dealtCards <= 7; dealtCards++) {
      const newCard = shuffledDeck.shift();
      hand.push(newCard);
      if (newCard.type_line.includes("Land")) {
        testObject.lands += 1;
      }
    }

    for (let turn = 1; turn <= 6; turn++) {
      if (testObject.lands >= turn) {
        results[turn].lands += 1;
      }

      for (let spellCost = turn; spellCost > 0; spellCost--) {
        const spell = hand.find((card) => {
          return card.cmc === spellCost;
        });

        if (spell && spell.cmc <= testObject.lands) {
          if (results[turn][`cmc${spellCost}`]) {
            results[turn][`cmc${spellCost}`] += 1;
          } else {
            results[turn][`cmc${spellCost}`] = 1;
          }
        }
      }

      if (turn < 6) {
        const newCard = shuffledDeck.shift();
        hand.push(newCard);
        if (newCard.type_line.includes("Land")) {
          testObject.lands += 1;
        }
      }
    }
  }

  const probabilities = { ...results };

  for (const turn in results) {
    for (const playable in results[turn]) {
      let probability = probabilities[turn][playable] / numSimulations;

      probability *= 100;
      probability = probability.toFixed(2);

      probabilities[turn][playable] = probability;
    }
  }
  return probabilities;
}

export default calculateCurve;
