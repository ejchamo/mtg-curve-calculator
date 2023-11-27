import React, { Dispatch } from "react";
import importDeck from "../../services/importDeck.ts";
import { DeckType } from "../../../typings/custom/deck";

interface props {
  decks: DeckType[];
  setDecks: Dispatch<DeckType[]>;
  setSelectedDeck: Dispatch<string | null>;
  importSuccess: boolean | null | undefined;
  setImportSuccess: Dispatch<boolean | null | undefined>;
}

const ImportButton: React.FC<props> = ({
  decks,
  setDecks,
  setSelectedDeck,
  importSuccess,
  setImportSuccess,
}) => {
  const handleCopy = async () => {
    setImportSuccess(undefined);
    try {
      const clipboardText = await navigator.clipboard.readText();
      const response = await importDeck(clipboardText);
      if (response && response.status === 201) {
        const body = await response.json();
        const newDeck: DeckType = body.newDeck;
        setDecks([...decks, newDeck]);
        setImportSuccess(true);
        setSelectedDeck(null);
      } else {
        setImportSuccess(false);
        setSelectedDeck(null);
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error(`Error in fetch: ${err.message}`);
      }
    }
  };

  let importStatus: React.JSX.Element = <></>;

  if (importSuccess) {
    importStatus = <div className="import-status"> import successfully loaded</div>;
  } else if (importSuccess === undefined) {
    importStatus = <span className="loader"></span>;
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
