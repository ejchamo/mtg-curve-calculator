import React from "react";
import { Link } from "react-router-dom";

const DeckTile = ({ deck }) => {
  return (
    <div className="cell">
      <Link to={{ pathname: "/deckeditor", state: { deck } }}>{deck.name}</Link>
    </div>
  );
};

export default DeckTile;
