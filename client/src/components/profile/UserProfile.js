import React, { useState, useEffect } from "react";
import getDecks from "../../services/getDecks";
import ImportButton from "./ImportButton";
import DeckList from "./DeckList";
import DeckOptions from "./DeckOptions";

const UserProfile = (props) => {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);

  useEffect(() => {
    getDecks().then((response) => {
      setDecks(response.decks);
    });
  }, []);

  return (
    <>
      <h3>{props.user.email}</h3>
      <div className="profile-options">
        <ImportButton decks={decks} setDecks={setDecks} />
        <DeckOptions
          selectedDeck={selectedDeck}
          setSelectedDeck={setSelectedDeck}
          decks={decks}
          setDecks={setDecks}
        />
      </div>
      <DeckList decks={decks} selectedDeck={selectedDeck} setSelectedDeck={setSelectedDeck} />
    </>
  );
};

export default UserProfile;
