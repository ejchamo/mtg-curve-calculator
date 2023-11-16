import React, { useState } from "react";
import searchCards from "../../../services/searchCards";

const SearchBar = (props) => {
  const [params, setParams] = useState("");

  const handleInputChange = (event) => {
    setParams(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    searchCards(params).then((response) => {
      if (response) {
        const returnedCards = response;
        props.setNewCards(returnedCards);
        props.setSearchFailed(false);
      } else {
        props.setNewCards([]);
        props.setSearchFailed(true);
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
