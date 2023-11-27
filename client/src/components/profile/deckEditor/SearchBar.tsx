import React, { useState, Dispatch } from "react";
import searchCards from "../../../services/searchCards.ts";
import { CardType } from "../../../../typings/custom/card";

interface props {
  setNewCards: Dispatch<CardType[]>;
  setSearchFailed: (status: boolean) => void;
}

const SearchBar: React.FC<props> = ({ setNewCards, setSearchFailed }) => {
  const [params, setParams] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParams(event.target.value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchCards(params).then((response) => {
      if (response) {
        const returnedCards = response;
        setNewCards(returnedCards);
        setSearchFailed(false);
      } else {
        setNewCards([]);
        setSearchFailed(true);
      }
    });
  };

  return (
    <>
      <form className="search-bar" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          name="search"
          placeholder="Search for a card name..."
          value={params}
          onChange={handleInputChange}
        />
        <button className="search-button" type="submit">
          Go
        </button>
      </form>
    </>
  );
};

export default SearchBar;
