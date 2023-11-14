import React, { useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const DeckEditor = (props) => {
  const deck = props.location.state.deck;
  const [cards, setCards] = useState(deck.cards.deck);

  return (
    <div className="full-height grid-y medium-grid-frame">
      <div className="medium-cell-block-container">
        <div className="grid-x grid-padding-x">
          <div className="search-box cell medium-9">
            <SearchBox />
          </div>
          <div className="card-box cell medium-3 medium-cell-block-y">
            <div>{deck.name}</div>
            <CardList cards={cards} setCards={setCards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckEditor;
