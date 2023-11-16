import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StatsButton from "./StatsButton";
import NewCardList from "./NewCardList";
import StatsList from "./StatsList";

const SearchBox = (props) => {
  const { cards, setCards } = props;

  const [newCards, setNewCards] = useState([]);
  const [showStats, setShowStats] = useState(false);
  const [searchFailed, setSearchFailed] = useState(false);

  const newCardList = (
    <NewCardList
      newCards={newCards}
      cards={cards}
      setCards={setCards}
      searchFailed={searchFailed}
    />
  );
  const statsList = <StatsList cards={cards} />;

  return (
    <>
      <div className="search-box-top">
        <SearchBar setNewCards={setNewCards} setSearchFailed={setSearchFailed} />
        <StatsButton showStats={showStats} setShowStats={setShowStats} />
      </div>
      {showStats ? statsList : newCardList}
    </>
  );
};

export default SearchBox;
