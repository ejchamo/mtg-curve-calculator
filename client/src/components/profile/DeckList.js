import React, { useState } from "react";
import DeckTile from "./DeckTile";

const DeckList = (props) => {
  const { selectedDeck, setSelectedDeck } = props;

  const deckTiles = props.decks.map((deck) => {
    return (
      <DeckTile
        key={deck.id}
        deck={deck}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
      />
    );
  });

  return <div className="deck-list">{deckTiles}</div>;
};

export default DeckList;
