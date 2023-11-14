import React from "react";
import NewCardTile from "./NewCardTile";

const NewCardList = (props) => {
  const { cards, setCards } = props;

  const newCardTiles = props.newCards.map((card) => {
    return <NewCardTile key={card.id} card={card} cards={cards} setCards={setCards} />;
  });
  return <div className="new-card-list">{newCardTiles}</div>;
};

export default NewCardList;
