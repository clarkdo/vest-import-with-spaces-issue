# Vitest error on importing file path with spaces

## Installation

```bash
pnpm i
```

## Works in Node.js

Console output: test helper

```bash

```bash
pnpm node
```

![image](https://user-images.githubusercontent.com/4312154/187495352-1349a73e-1b42-4f4b-8318-17c233e0b139.png)

## Error in Vitest

Error: [vite-node] Failed to load ./test%20utils/helper.mjs

```bash
pnpm test
```

![image](https://user-images.githubusercontent.com/4312154/187495230-f7b15454-eb70-4cca-b767-88ee6d91e684.png)
