import { describe, expectTypeOf, test } from 'vitest'
import { asyncFlow } from '../src/asyncFlow.js'
import { asyncPipe } from '../src/asyncPipe.js'
import { invoke } from '../src/invoke.js'
import { pipe } from '../src/pipe.js'

describe('test all fn return type', () => {
  test('asyncFlow', async () => {
    const loadInitialValue = async () => Promise.resolve(1)
    const syncTail = (x: number) => x + 1
    const result = asyncFlow(loadInitialValue, syncTail)
    const asyncTail = (x: number) => Promise.resolve(x)
    const result2 = asyncFlow(loadInitialValue, asyncTail)
    expectTypeOf(result).toMatchTypeOf<() => Promise<number>>()
    expectTypeOf(result2).toMatchTypeOf<() => Promise<number>>()
  })

  test('asyncPipe', async () => {
    const syncTail = (x: number) => x + 1
    const result = asyncPipe(Promise.resolve(1), syncTail)
    const asyncTail = (x: number) => Promise.resolve(x)
    const result2 = asyncPipe(Promise.resolve(1), asyncTail)
    expectTypeOf(result).toMatchTypeOf<Promise<number>>()
    expectTypeOf(result2).toMatchTypeOf<Promise<number>>()
  })
  test('invoke', () => {
    pipe('begin', invoke(console.log), x => expectTypeOf<string>(x))
    pipe(
      'begin',
      invoke(x => 1),
      x => expectTypeOf<string>(x)
    )
  })
})
