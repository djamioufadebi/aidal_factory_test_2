import type { Product } from './types';
import { getCommands, getProducts } from './data.sample';

export type AggregatedProduct = {
  ref: string;
  name?: string;
  price?: number;
  quantity: number;
  totalAmount?: number;
};

export async function analyzeCommandsEnriched(): Promise<AggregatedProduct[]> {
  const commands = await getCommands();

  const counts = new Map<string, number>();
  for (const cmd of commands) {
    for (const [ref, qty] of Object.entries(cmd.products ?? {})) {
      if (typeof qty === 'number' && Number.isFinite(qty) && qty > 0) {
        counts.set(ref, (counts.get(ref) ?? 0) + qty);
      }
    }
  }

  const refs = [...counts.keys()];
  const products: Product[] = await getProducts(refs);
  const pIndex = new Map(products.map(p => [p.ref, p]));

  const out = refs.map(ref => {
    const quantity = counts.get(ref)!;
    const p = pIndex.get(ref);
    const item: AggregatedProduct = { ref, quantity };
    if (p) {
      item.name = p.name;
      item.price = p.price;
      if (typeof p.price === 'number') {
        item.totalAmount = p.price * quantity;
      }
    }
    return item;
  });

  out.sort((a, b) => b.quantity - a.quantity);
  return out;
}
