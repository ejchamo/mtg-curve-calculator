import React from "react";
import { Link } from "react-router-dom";
import deleteDeck from "../../services/deleteDeck";

const DeckOptions = (props) => {
  const { selectedDeck, setSelectedDeck, decks, setDecks } = props;

  const deleteOnClick = async () => {
    const response = await deleteDeck(selectedDeck);

    if (response.status === 200) {
      const newDecks = decks.filter((deck) => {
        return deck.id !== selectedDeck;
      });

      setDecks(newDecks);
      setSelectedDeck(null);
    }
  };

  let options;

  if (selectedDeck) {
    options = (
      <div className="deck-options">
        <Link to={`/deckeditor/${selectedDeck}`}>Edit the deck</Link>
        <button className="delete-button" onClick={deleteOnClick}>
          DELETE
        </button>
      </div>
    );
  }

  return <>{options}</>;
};

export default DeckOptions;
