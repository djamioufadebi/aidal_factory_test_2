# Exercice 2 — Analyse des commandes (TypeScript)

## Pré-requis
- Node.js 18+
- npm

## Installation
```bash
npm i
```

## Lancer l'analyse minimale
```bash
npm run analyze
```

Sortie attendue (avec les données d'exemple) :
```json
{ "refA": 3, "refB": 9 }
```

## Lancer la version enrichie 
```bash
npm run analyze:enriched
```

Exemple de sortie :
```txt
refA | Produit A | price=50 | qty=3  | total=150
refB | Produit B | price=25 | qty=9  | total=225
```

## Tests unitaires
```bash
npm test
# ou en watch:
npm run test:watch
```

## Structure
```
src/
  types.ts                 # types Command/Product
  data.sample.ts           # mocks getCommands/getProducts
  analyze.ts               # réponse minimale demandée
  analyzeEnriched.ts       # variante "pro"
  index.ts                 # petit runner (CLI)
test/
  analyze.test.ts          # tests Vitest
```
