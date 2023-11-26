import React, { useState, Dispatch } from "react";
import { DeckType } from "../../../../typings/custom/deck";

interface props {
  deck: DeckType;
  setDeck: Dispatch<DeckType>;
  setEditingName: (status: boolean) => void;
}

const DeckNameForm: React.FC<props> = ({ deck, setDeck, setEditingName }) => {
  const [newName, setNewName] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.currentTarget.value);
  };

  const changeName = () => {
    setDeck({ ...deck, name: newName });
    setEditingName(false);
  };

  return (
    <form className="new-name" onSubmit={changeName}>
      <input type="text" name="newName" value={newName} onChange={handleInputChange}></input>
    </form>
  );
};

export default DeckNameForm;
