import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox.tsx";
import CardBox from "./CardBox.tsx";
import getDeckById from "../../../services/getDeckById.ts";
import { DeckType } from "../../../../typings/custom/deck";
import { CardType } from "../../../../typings/custom/card";

interface MatchParams {
  id: string;
}
interface props {
  computedMatch: {
    params: MatchParams;
  };
}

const DeckEditor: React.FC<props> = ({ computedMatch }) => {
  const [deck, setDeck] = React.useState<DeckType>({
    id: "",
    name: "",
    cards: { deck: [] },
    userId: "",
  });
  const [cards, setCards] = React.useState<CardType[]>([]);

  useEffect(() => {
    getDeckById(computedMatch.params.id).then((deckData) => {
      setDeck(deckData);
      setCards(deckData.cards.deck);
    });
  }, []);

  return (
    <div className="full-height grid-y medium-grid-frame">
      <div className="medium-cell-block-container">
        <div className="grid-x grid-padding-x">
          <div className="search-box cell medium-9">
            <SearchBox cards={cards} setCards={setCards} />
          </div>
          <div className="card-box cell medium-3">
            <CardBox deck={deck} setDeck={setDeck} cards={cards} setCards={setCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckEditor;
