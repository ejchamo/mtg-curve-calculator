import React, { useState, Dispatch } from "react";
import { CardType } from "../../../../typings/custom/card";

interface props {
  card: CardType;
  cards: CardType[];
  setCards: Dispatch<CardType[]>;
}

const NewCardTile: React.FC<props> = ({ card, cards, setCards }) => {
  const [hovered, setHovered] = useState(false);

  let hoverClass = "";
  if (hovered) {
    hoverClass = "enlarge";
  }

  const addCard = () => {
    cards.unshift(card);
    setCards([...cards]);
  };

  if (card.image_uris) {
    return (
      <div className="new-card-tile" onClick={addCard}>
        <img className={`new-card-image ${hoverClass}`} src={`${card.image_uris.normal}`} />
      </div>
    );
  } else {
    return null;
  }
};

export default NewCardTile;
