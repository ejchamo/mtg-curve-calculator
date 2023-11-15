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
      }
    });
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search for a card name..."
        value={params}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
