import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CardList from "./CardList.tsx";
import saveDeck from "../../../services/saveDeck";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import DeckNameForm from "./DeckNameForm";

const CardBox = (props) => {
  const { deck, setDeck, cards, setCards } = props;
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
    if (response.status === 200) {
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
