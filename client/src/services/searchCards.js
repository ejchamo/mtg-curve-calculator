const searchCards = async (name) => {
  try {
    const response = await fetch(`/api/v1/newCards/${name}`);
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const body = await response.json();
    const cards = body.cards;
    return cards;
  } catch (err) {
    console.error(`Error in fetch: ${err.message}`);
  }
};

export default searchCards;
