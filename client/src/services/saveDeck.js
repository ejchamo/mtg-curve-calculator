const saveDeck = async (newDeck) => {
  try {
    const response = await fetch(`/api/v1/decks/${newDeck.id}`, {
      method: "PATCH",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ newDeck }),
    });
    return response;
  } catch (err) {
    console.error(`Error in fetch: ${err.message}`);
  }
};

export default saveDeck;
