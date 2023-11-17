import React, { useState } from "react";
import importDeck from "../../services/importDeck";

const ImportButton = (props) => {
  const { decks, setDecks } = props;

  const handleCopy = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const response = await importDeck(clipboardText);
      if (response) {
        const newDeck = response.newDeck;
        setDecks([...decks, newDeck]);
      }
    } catch (error) {
      console.error("Error copying text to clipboard:", error);
    }
  };

  return (
    <>
      <button className="button import" onClick={handleCopy}>
        IMPORT DECK FROM MTGA
      </button>
    </>
  );
};

export default ImportButton;
