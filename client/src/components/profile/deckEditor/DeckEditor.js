import React, { useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import getDeckById from "../../../services/getDeckById";

const DeckEditor = (props) => {
  const [deck, setDeck] = useState({ id: "", name: "", cards: [], userId: "" });
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getDeckById(props.computedMatch.params.id).then((deckData) => {
      setDeck(deckData);
      setCards(deckData.cards.deck);
    });
  }, []);

  return (
    <div className="full-height grid-y medium-grid-frame">
      <div className="medium-cell-block-container">
        <div className="grid-x grid-padding-x">
          <div className="search-box cell medium-9">
            <SearchBox cards={cards} setCards={setCards} />
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
