import React, { useState, useEffect } from "react";
import getDecks from "../../services/getDecks.ts";
import ImportButton from "./ImportButton.tsx";
import DeckList from "./DeckList.tsx";
import DeckOptions from "./DeckOptions.tsx";
import { DeckType } from "../../../typings/custom/deck";
import { userType } from "../../../typings/custom/user";

interface props {
  user: userType;
}

const UserProfile: React.FC<props> = ({ user }) => {
  const [decks, setDecks] = React.useState<DeckType[]>([]);
  const [selectedDeck, setSelectedDeck] = React.useState<string | null>(null);
  const [importSuccess, setImportSuccess] = React.useState<boolean | null | undefined>(null);

  useEffect(() => {
    getDecks().then((response) => {
      const retrievedDecks: DeckType[] = response.decks;
      setDecks(retrievedDecks);
    });
  }, []);

  return (
    <>
      <h3 className="profile-name">{user.email}</h3>
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
