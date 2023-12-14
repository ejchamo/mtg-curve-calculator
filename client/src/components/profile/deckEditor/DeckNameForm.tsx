import React, { useState, Dispatch } from "react";
import { DeckType } from "../../../../typings/custom/deck";

interface props {
  deck: DeckType;
  setDeck: Dispatch<DeckType>;
  setEditingName: (status: boolean) => void;
}

const DeckNameForm: React.FC<props> = ({ deck, setDeck, setEditingName }) => {
  const [newName, setNewName] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.currentTarget.value);
  };

  const changeName = () => {
    event?.preventDefault();
    if (newName.trim() === "") {
      setError(true);
    } else {
      setDeck({ ...deck, name: newName });
      setEditingName(false);
      setError(false);
    }
  };

  let warning: React.JSX.Element = <></>;

  if (error) {
    warning = <div className="deck-name-warning">Please enter a deck name</div>;
  }

  return (
    <form className="new-name" onSubmit={changeName}>
      <input type="text" name="newName" value={newName} onChange={handleInputChange}></input>
      {warning}
    </form>
  );
};

export default DeckNameForm;
