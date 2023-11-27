import React, { Dispatch } from "react";
import DeckTile from "./DeckTile.tsx";
import { DeckType } from "../../../typings/custom/deck";

interface props {
  decks: DeckType[];
  selectedDeck: string | null;
  setSelectedDeck: Dispatch<string>;
  setImportSuccess: Dispatch<boolean | null>;
}

const DeckList: React.FC<props> = ({ decks, selectedDeck, setSelectedDeck, setImportSuccess }) => {
  const deckTiles = decks.map((deck) => {
    return (
      <DeckTile
        key={deck.id}
        deck={deck}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
        setImportSuccess={setImportSuccess}
      />
    );
  });

  return <div className="deck-list">{deckTiles}</div>;
};

export default DeckList;
