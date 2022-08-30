import { describe } from 'vitest'

describe('test:suite', async () => {
  const util = await import("./test%20utils/helper.mjs") // Error: [vite-node] Failed to load /test/test%20dir/util.mjs
  console.log(util)
})
