import { describe, expect, test } from 'vitest'
import { asyncPipe, pipe } from '../src/index.js'

describe('test all functions', () => {
  test('pipe', () => {
    const getTwo = (pre: number) => [pre, 2]
    const getThree = (pre: number[]) => [...pre, 3]
    const result = pipe(1, getTwo, getThree)
    expect(result).deep.eq([1, 2, 3])
  })

  test('asyncPipe', async () => {
    const getTwo = (pre: number) => [pre, 2]
    const getThree = (pre: number[]) => Promise.resolve([...pre, 3])
    const result = await asyncPipe(Promise.resolve(1), getTwo, getThree)
    expect(result).deep.eq([1, 2, 3])
  })
})
