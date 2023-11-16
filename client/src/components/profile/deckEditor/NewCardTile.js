import React from "react";

const NewCardTile = (props) => {
  const { card, cards, setCards } = props;

  const addCard = () => {
    cards.unshift(card);
    setCards([...cards]);
  };

  if (card.image_uris) {
    return (
      <div className="new-card-tile" onClick={addCard}>
        <img src={`${card.image_uris.normal}`} />
      </div>
    );
  } else {
    return null;
  }
};

export default NewCardTile;
