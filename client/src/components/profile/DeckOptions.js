import React from "react";
import { Link } from "react-router-dom";
import deleteDeck from "../../services/deleteDeck";
import exportDeck from "../../services/exportDeck";
import getDeckById from "../../services/getDeckById.ts";

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

  const exportOnClick = async () => {
    const deck = await getDeckById(selectedDeck);
    exportDeck(deck);
  };

  let options;

  if (selectedDeck) {
    options = (
      <div className="deck-options">
        <button className="export-button" onClick={exportOnClick}>
          Export deck to MTGA
        </button>
        <Link className="edit-button" to={`/deckeditor/${selectedDeck}`}>
          Edit Deck / Run Stats
        </Link>
        <button className="delete-button" onClick={deleteOnClick}>
          DELETE DECK
        </button>
      </div>
    );
  }

  return <>{options}</>;
};

export default DeckOptions;
