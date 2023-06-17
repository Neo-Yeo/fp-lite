import { expect, test, vi } from 'vitest'
import { asyncReduce } from '../src/asyncReduce.js'

test('async reduce', async () => {
  const length = 10
  const value = 1
  const fn = vi.fn().mockResolvedValue(value)
  const tenResolvedFn: ((x: number) => Promise<number>)[] = Array(length).fill(
    (acc: number) => fn().then((x: number) => acc + x)
  )
  const total = await asyncReduce(tenResolvedFn, 0)
  expect(total).eq(length * value)
})
