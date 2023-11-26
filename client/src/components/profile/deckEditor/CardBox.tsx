import React, { useState, Dispatch } from "react";
import { Redirect } from "react-router-dom";
import CardList from "./CardList.tsx";
import saveDeck from "../../../services/saveDeck.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import DeckNameForm from "./DeckNameForm.tsx";
import { DeckType } from "../../../../typings/custom/deck";
import { CardType } from "../../../../typings/custom/card";

interface props {
  deck: DeckType;
  setDeck: Dispatch<DeckType>;
  cards: CardType[];
  setCards: Dispatch<CardType[]>;
}

const CardBox: React.FC<props> = ({ deck, setDeck, cards, setCards }) => {
  const [editingName, setEditingName] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  let deckName = (
    <div>
      <FontAwesomeIcon
        icon={faPencil}
        className="edit-icon"
        style={{ color: "#ffffff" }}
        onClick={() => {
          setEditingName(true);
        }}
      />
      {deck.name}
    </div>
  );
  if (editingName) {
    deckName = <DeckNameForm deck={deck} setDeck={setDeck} setEditingName={setEditingName} />;
  }

  const saveAndExit = async () => {
    const editedDeck = { ...deck, cards: { deck: cards } };
    const response = await saveDeck(editedDeck);
    if (response && response.status === 200) {
      setShouldRedirect(true);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to="/profile" />;
  }

  return (
    <>
      <div className="save" onClick={saveAndExit}>
        Save & Exit
      </div>
      {deckName}
      <span>cards : {cards.length}</span>
      <CardList cards={cards} setCards={setCards} />
    </>
  );
};

export default CardBox;
