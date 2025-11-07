export type Command = {
  _id: string;
  date: number;              // timestamp (ms)
  totalPrice: number;
  products: Record<string, number>; // { [ref]: quantity }
};

export type Product = {
  ref: string;
  name: string;
  price: number;
};
