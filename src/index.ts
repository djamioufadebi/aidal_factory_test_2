import { analyzeCommands } from './analyze';
import { analyzeCommandsEnriched } from './analyzeEnriched';

const mode = process.argv[2];

async function main() {
  if (mode === 'enriched') {
    const rows = await analyzeCommandsEnriched();
    for (const r of rows) {
      const price = (typeof r.price === 'number') ? r.price.toFixed(2) : '-';
      const total = (typeof r.totalAmount === 'number') ? r.totalAmount.toFixed(2) : '-';
      console.log(`${r.ref} | ${r.name ?? '-'} | price=${price} | qty=${r.quantity} | total=${total}`);
    }
  } else {
    const res = await analyzeCommands();
    console.log(JSON.stringify(res, null, 2));
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
