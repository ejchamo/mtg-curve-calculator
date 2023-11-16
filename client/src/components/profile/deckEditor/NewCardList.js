import React from "react";
import NewCardTile from "./NewCardTile";

const NewCardList = (props) => {
  const { cards, setCards, searchFailed } = props;

  const newCardTiles = props.newCards.map((card) => {
    return <NewCardTile key={card.id} card={card} cards={cards} setCards={setCards} />;
  });

  let searchWarning;
  if (searchFailed) {
    searchWarning = <div>search failed: try searching by card name</div>;
  }

  return (
    <div className="new-card-list">
      {newCardTiles}
      {searchWarning}
    </div>
  );
};

export default NewCardList;
