# Clean code and architecture course (# Task 1)

## Initing repository with typescript and jest

```bash
yarn add typescript jest @types/jest ts-node ts-jest
npx tsc --init
npx ts-jest config:init
```

## How to run the test in watch mode?

```bash
npx jest --watchAll
```

## Or using package json scripts

```json
{
  "name": "clean_code_and_clean_architecture",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "yarn jest --watchAll"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@types/jest": "^28.1.3",
    "jest": "^28.1.2",
    "ts-jest": "^28.0.5",
    "ts-node": "^10.8.1",
    "typescript": "^4.7.4"
}
```

```bash
yarn test
```
