import React from "react";
import { Link } from "react-router-dom";

const DeckTile = ({ deck }) => {
  return (
    <div className="cell">
      <div className="radius bordered shadow card">{deck.name}</div>
    </div>
  );
};

export default DeckTile;
