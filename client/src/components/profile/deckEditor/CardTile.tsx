import React, { Dispatch } from "react";
import { CardType } from "../../../../typings/custom/card";

interface props {
  index: number;
  card: CardType;
  cards: CardType[];
  setCards: Dispatch<CardType[]>;
}

const CardTile: React.FC<props> = ({ index, card, cards, setCards }) => {
  const removeCard = () => {
    cards.splice(index, 1);
    setCards([...cards]);
  };
  return (
    <div className="card-tile" onClick={removeCard}>
      {card.name}
    </div>
  );
};

export default CardTile;
