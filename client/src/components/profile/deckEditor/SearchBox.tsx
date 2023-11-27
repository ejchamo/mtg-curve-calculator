import React, { useState, Dispatch } from "react";
import SearchBar from "./SearchBar.tsx";
import StatsButton from "./StatsButton.tsx";
import NewCardList from "./NewCardList.tsx";
import StatsList from "./StatsList.tsx";
import { CardType } from "../../../../typings/custom/card";

interface props {
  cards: CardType[];
  setCards: Dispatch<CardType[]>;
}

const SearchBox: React.FC<props> = ({ cards, setCards }) => {
  const [newCards, setNewCards] = React.useState<CardType[]>([]);
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
