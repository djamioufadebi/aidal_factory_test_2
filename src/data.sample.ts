import type { Command, Product } from './types';

// Exemple de l'énoncé : refA:3 et refB:5, puis refB:4
export async function getCommands(): Promise<Command[]> {
  return [
    { _id: '1', date: Date.parse('2025-08-01'), totalPrice: 475, products: { refA: 3, refB: 5 } },
    { _id: '2', date: Date.parse('2025-08-03'), totalPrice: 200, products: { refB: 4 } },
  ];
}

const ALL_PRODUCTS: Product[] = [
  { ref: 'refA', name: 'Produit A', price: 50 },
  { ref: 'refB', name: 'Produit B', price: 25 },
  { ref: 'refC', name: 'Produit C', price: 100 },
];

// getProducts facultatif pour la version enrichie.
export async function getProducts(refList: string[] | null): Promise<Product[]> {
  if (!refList) return ALL_PRODUCTS;
  return ALL_PRODUCTS.filter(p => refList.includes(p.ref));
}
