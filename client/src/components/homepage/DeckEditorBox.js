import React from "react";
import statsImage from "../../assets/images/StatsExample.png";

const DeckEditorBox = () => {
  return (
    <div className="deckeditor-box">
      <div className="stats-explanation">
        <h2>Deck Editor Page</h2>
        <p>
          View the stats for your deck about how playable your cards are, then edit your deck to
          improve it
        </p>
      </div>
      <img className="stats-image" src={statsImage} alt="stats page example" />
    </div>
  );
};

export default DeckEditorBox;
