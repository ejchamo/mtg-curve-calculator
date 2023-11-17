import React, { useState } from "react";
import importDeck from "../../services/importDeck";

const ImportButton = (props) => {
  const { decks, setDecks } = props;
  const [importSuccess, setImportSuccess] = useState(null);

  const handleCopy = async () => {
    try {
      const clipboardText = await navigator.clipboard.readText();
      const response = await importDeck(clipboardText);
      if (response.status === 201) {
        const body = await response.json();
        const newDeck = body.newDeck;
        setDecks([...decks, newDeck]);
        setImportSuccess(true);
      } else {
        setImportSuccess(false);
      }
    } catch (error) {
      console.error("Error copying text to clipboard:", error);
    }
  };

  let importStatus;

  if (importSuccess) {
    importStatus = <div className="import-status"> import successfully loaded</div>;
  } else if (importSuccess === false) {
    importStatus = (
      <div className="import-status"> import failed, the import must be from a MTGA export</div>
    );
  }
  return (
    <>
      <button className="button import" onClick={handleCopy}>
        IMPORT DECK FROM MTGA
      </button>
      {importStatus}
    </>
  );
};

export default ImportButton;
