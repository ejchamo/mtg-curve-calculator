import React, { Dispatch } from "react";
import { Link } from "react-router-dom";
import deleteDeck from "../../services/deleteDeck.ts";
import exportDeck from "../../services/exportDeck.ts";
import getDeckById from "../../services/getDeckById.ts";
import { DeckType } from "../../../typings/custom/deck";

interface props {
  decks: DeckType[];
  setDecks: Dispatch<DeckType[]>;
  selectedDeck: string | null;
  setSelectedDeck: Dispatch<string | null>;
  setImportSuccess: Dispatch<boolean | null>;
}

const DeckOptions: React.FC<props> = ({ selectedDeck, setSelectedDeck, decks, setDecks }) => {
  const deleteOnClick = async () => {
    const response = await deleteDeck(selectedDeck!);

    if (response && response.status === 200) {
      const newDecks = decks.filter((deck) => {
        return deck.id !== selectedDeck;
      });

      setDecks(newDecks);
      setSelectedDeck(null);
    }
  };

  const exportOnClick = async () => {
    const deck: DeckType = await getDeckById(selectedDeck!);
    exportDeck(deck);
  };

  let options: React.JSX.Element = <></>;

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
