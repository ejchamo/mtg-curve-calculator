const getDeckById = async (deckId: string) => {
  try {
    const response = await fetch(`/api/v1/decks/${deckId}`);
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const body = await response.json();
    return body.deck;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error in fetch: ${err.message}`);
    }
  }
};

export default getDeckById;
