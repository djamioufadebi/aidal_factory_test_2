import type { Command } from './types';
import { getCommands } from './data.sample';

// Réponse minimale demandée: { ref: totalQuantity }
export async function analyzeCommands(): Promise<Record<string, number>> {
  const commands: Command[] = await getCommands();

  const totals: Record<string, number> = {};
  for (const cmd of commands) {
    for (const [ref, qty] of Object.entries(cmd.products ?? {})) {
      if (typeof qty === 'number' && Number.isFinite(qty) && qty > 0) {
        totals[ref] = (totals[ref] ?? 0) + qty;
      }
    }
  }
  return totals;
}
