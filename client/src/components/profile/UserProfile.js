import React, { useState, useEffect } from "react";
import getDecks from "../../services/getDecks";
import DeckTile from "./DeckTile";
import ImportButton from "./ImportButton";

const UserProfile = (props) => {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    getDecks().then((response) => {
      setDecks(response.decks);
    });
  }, []);

  const deckTiles = decks.map((deck) => {
    return <DeckTile key={deck.id} deck={deck} />;
  });

  return (
    <>
      <div className="profile-detail-container cell medium-6 medium-cell-block-y">
        <h3 className="profile-showpage-email">{props.user.email}</h3>
      </div>
      <ImportButton decks={decks} setDecks={setDecks} />
      {deckTiles}
    </>
  );
};

export default UserProfile;
