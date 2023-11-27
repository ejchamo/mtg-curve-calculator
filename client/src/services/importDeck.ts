const importDeck = async (deckText: string) => {
  try {
    const response = await fetch(`/api/v1/decks/import`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ deckText }),
    });
    return response;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error in fetch: ${err.message}`);
    }
  }
};

export default importDeck;
