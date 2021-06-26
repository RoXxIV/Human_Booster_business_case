export interface Advert {
  id: number;
  released_at: Date;
  description: string;
  width: string;
  length: string;
  shape: string;
  concave: string;
  picturePath?: string;
  model: [];
  brand: [];
  skateshop: [];
  price: number;
}
