const deleteDeck = async (deckId: string) => {
  try {
    const deletedDecks = await fetch(`/api/v1/decks/${deckId}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ deckId }),
    });
    return deletedDecks;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error in fetch: ${err.message}`);
    }
  }
};
export default deleteDeck;
