import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import { DeckType } from "../../../typings/custom/deck";

interface props {
  deck: DeckType;
  selectedDeck: string | null;
  setSelectedDeck: Dispatch<string>;
  setImportSuccess: Dispatch<boolean | null>;
}

const DeckTile: React.FC<props> = ({ deck, selectedDeck, setSelectedDeck, setImportSuccess }) => {
  let selectedStatus: string | undefined;

  if (deck.id === selectedDeck) {
    selectedStatus = "selected-deck";
  }

  const select = () => {
    setSelectedDeck(deck.id);
    setImportSuccess(null);
  };

  return (
    <div className={`deck-tile ${selectedStatus}`} onClick={select}>
      <div>{deck.name}</div>
      <img className="deck-image" src={`${deck.cards.deck[0].image_uris.normal}`} />
    </div>
  );
};

export default DeckTile;
