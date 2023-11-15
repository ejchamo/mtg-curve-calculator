const importDeck = async (deckText) => {
  try {
    const response = await fetch(`/api/v1/decks/import`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ deckText }),
    });
    const body = await response.json();
    return body;
  } catch (error) {
    console.error(`Error in fetch: ${error.message}`);
  }
};

export default importDeck;