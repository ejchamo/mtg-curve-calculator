import React, { Dispatch } from "react";
import NewCardTile from "./NewCardTile.tsx";
import { CardType } from "../../../../typings/custom/card";

interface props {
  newCards: CardType[];
  cards: CardType[];
  setCards: Dispatch<CardType[]>;
  searchFailed: boolean;
}

const NewCardList: React.FC<props> = ({ newCards, cards, setCards, searchFailed }) => {
  const newCardTiles = newCards.map((card) => {
    return <NewCardTile key={card.id} card={card} cards={cards} setCards={setCards} />;
  });

  let searchWarning: React.JSX.Element = <></>;
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
