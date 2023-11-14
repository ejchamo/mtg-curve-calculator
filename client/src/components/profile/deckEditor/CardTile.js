import React from "react";

const CardTile = (props) => {
  const { index, card, cards, setCards } = props;

  const removeCard = () => {
    cards.splice(index, 1);
    setCards([...cards]);
  };
  return <div onClick={removeCard}> {card.name}</div>;
};

export default CardTile;
