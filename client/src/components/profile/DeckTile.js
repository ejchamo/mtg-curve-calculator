import React from "react";
import { Link } from "react-router-dom";

const DeckTile = (props) => {
  const { deck, selectedDeck, setSelectedDeck } = props;

  let selectedStatus;

  if (deck.id === selectedDeck) {
    selectedStatus = "selected-deck";
  }

  const select = () => {
    setSelectedDeck(deck.id);
  };

  return (
    <div className={`deck-tile ${selectedStatus}`} onClick={select}>
      <div>{deck.name}</div>
      <img className="deck-image" src={`${deck.cards.deck[0].image_uris.normal}`} />
    </div>
  );
};

export default DeckTile;
