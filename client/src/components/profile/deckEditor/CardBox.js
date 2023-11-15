import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import CardList from "./CardList";
import saveDeck from "../../../services/saveDeck";

const CardBox = (props) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const saveAndExit = async () => {
    const editedDeck = { ...props.deck, cards: { deck: props.cards } };
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
      <div onClick={saveAndExit}>Save & Exit</div>
      <div>{props.deck.name}</div>
      <CardList cards={props.cards} setCards={props.setCards} />
    </>
  );
};

export default CardBox;
