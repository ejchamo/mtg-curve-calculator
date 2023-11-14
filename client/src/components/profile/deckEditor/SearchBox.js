import React, { useState } from "react";
import SearchBar from "./SearchBar";
import NewCardList from "./NewCardList";

const SearchBox = (props) => {
  const [newCards, setNewCards] = useState([]);

  const { cards, setCards } = props;

  return (
    <>
      <SearchBar setNewCards={setNewCards} />
      <NewCardList newCards={newCards} cards={cards} setCards={setCards} />
    </>
  );
};

export default SearchBox;
