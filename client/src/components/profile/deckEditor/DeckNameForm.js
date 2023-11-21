import React, { useState } from "react";

const DeckNameForm = (props) => {
  const { deck, setDeck, setEditingName } = props;
  const [newName, setNewName] = useState("");

  const handleInputChange = (event) => {
    setNewName(event.currentTarget.value);
  };

  const changeName = () => {
    event.preventDefault();
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
