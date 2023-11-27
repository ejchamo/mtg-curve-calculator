export interface ImageURI {
  small: string;
  normal: string;
  large: string;
  png: string;
  art_crop: string;
  border_crop: string;
}

export interface CardType {
  object: string;
  id: string;
  name: string;
  image_uris: ImageURI;
  cmc: number;
  type_line: string;
}
