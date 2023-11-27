import React, { Dispatch } from "react";
import CardTile from "./CardTile.tsx";
import { CardType } from "../../../../typings/custom/card";

interface props {
  cards: CardType[];
  setCards: Dispatch<CardType[]>;
}

const CardList: React.FC<props> = ({ cards, setCards }) => {
  const cardTiles: React.ReactNode[] = [];
  for (let i = 0; i < cards.length; i++) {
    cardTiles.push(
      <CardTile key={i} index={i} card={cards[i]} cards={cards} setCards={setCards} />
    );
  }

  return <div className="card-list">{cardTiles}</div>;
};

export default CardList;
