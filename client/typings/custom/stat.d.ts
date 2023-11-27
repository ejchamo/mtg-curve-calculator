export interface StatType {
  [cardProperty: string]: string;
  cardStats: number;
}

export interface Stats {
  [key: string]: StatType;
}
