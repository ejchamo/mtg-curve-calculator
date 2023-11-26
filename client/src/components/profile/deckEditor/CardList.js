import React from "react";
import CardTile from "./CardTile.tsx";

const CardList = (props) => {
  const { cards } = props;

  const cardTiles = [];
  for (let i = 0; i < cards.length; i++) {
    cardTiles.push(
      <CardTile key={i} index={i} card={cards[i]} cards={cards} setCards={props.setCards} />
    );
  }

  return <div className="card-list">{cardTiles}</div>;
};

export default CardList;
