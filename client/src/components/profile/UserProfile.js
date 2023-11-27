import React, { useState, useEffect } from "react";
import getDecks from "../../services/getDecks";
import ImportButton from "./ImportButton";
import DeckList from "./DeckList.tsx";
import DeckOptions from "./DeckOptions.tsx";

const UserProfile = (props) => {
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState(null);
  const [importSuccess, setImportSuccess] = useState(null);

  useEffect(() => {
    getDecks().then((response) => {
      setDecks(response.decks);
    });
  }, []);

  return (
    <>
      <h3 className="profile-name">{props.user.email}</h3>
      <div className="profile-options">
        <ImportButton
          decks={decks}
          setDecks={setDecks}
          setSelectedDeck={setSelectedDeck}
          importSuccess={importSuccess}
          setImportSuccess={setImportSuccess}
        />
        <DeckOptions
          selectedDeck={selectedDeck}
          setSelectedDeck={setSelectedDeck}
          decks={decks}
          setDecks={setDecks}
        />
      </div>
      <DeckList
        decks={decks}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
        setImportSuccess={setImportSuccess}
      />
    </>
  );
};

export default UserProfile;
