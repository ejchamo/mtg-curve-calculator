import React, { useState } from "react";

const NewCardTile = (props) => {
  const { card, cards, setCards } = props;

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
        <img
          className={`new-card-image ${hoverClass}`}
          src={`${card.image_uris.normal}`}
          // onMouseEnter={() => setHovered(true)}
          // onMouseLeave={() => setHovered(false)}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default NewCardTile;
