import React, { useState } from "react";
import DeckTile from "./DeckTile";

const DeckList = (props) => {
  const { selectedDeck, setSelectedDeck, importSuccess, setImportSuccess } = props;

  const deckTiles = props.decks.map((deck) => {
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
