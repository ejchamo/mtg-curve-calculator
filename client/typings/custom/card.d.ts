export interface ImageURI {
  size: string;
}

export interface CardType {
  object: string;
  id: string;
  name: string;
  image_uris: ImageURI[];
  cmc: number;
  type_line: string;
}
