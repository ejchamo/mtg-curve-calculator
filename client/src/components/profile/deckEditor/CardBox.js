import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CardList from "./CardList";
import saveDeck from "../../../services/saveDeck";

const CardBox = (props) => {
  const { deck, cards, setCards } = props;
  const [shouldRedirect, setShouldRedirect] = useState(false);

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
      <div>{deck.name}</div>
      <span>cards : {cards.length}</span>
      <CardList cards={cards} setCards={setCards} />
    </>
  );
};

export default CardBox;
