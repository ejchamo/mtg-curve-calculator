import { CardType } from "../../typings/custom/card";

const searchCards = async (name: string) => {
  try {
    const response = await fetch(`/api/v1/newCards/${name}`);
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const body = await response.json();
    const cards: CardType[] = body.cards;
    return cards;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Error in fetch: ${err.message}`);
    }
  }
};

export default searchCards;
