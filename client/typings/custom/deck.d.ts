import { CardType } from "./card";

interface DeckCards {
  deck: CardType[];
}

export interface DeckType {
  id: string;
  name: string;
  cards: DeckCards;
  userId: string;
}
