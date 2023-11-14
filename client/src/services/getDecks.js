const getDecks = async () => {
  try {
    const response = await fetch(`/api/v1/decks`);
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const body = await response.json();
    return body;
  } catch (err) {
    console.error(`Error in fetch: ${err.message}`);
  }
};

export default getDecks;
