import { describe, it, expect } from 'vitest';
import { analyzeCommands } from '../src/analyze';

describe('analyzeCommands', () => {
  it('agrège les quantités par ref', async () => {
    const res = await analyzeCommands();
    expect(res).toEqual({ refA: 3, refB: 9 });
  });
});
