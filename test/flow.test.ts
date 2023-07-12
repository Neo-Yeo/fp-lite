import { describe, expect, test } from 'vitest'
import { asyncFlow, flow } from '../src/index.js'

describe('test all functions', () => {
  test('flow', () => {
    const getOne = () => 1
    const getTwo = (pre: number) => [pre, 2]
    const getThree = (pre: number[]) => [...pre, 3]
    const workFlow = flow(getOne, getTwo, getThree)
    expect(workFlow()).deep.eq([1, 2, 3])
  })

  test('asyncFlow', async () => {
    const getOne = () => Promise.resolve(1)
    const getTwo = (pre: number) => [pre, 2]
    const getThree = (pre: number[]) => Promise.resolve([...pre, 3])
    const workFlow = asyncFlow(getOne, getTwo, getThree)
    const result = await workFlow()
    expect(result).deep.eq([1, 2, 3])
  })

  test('pitfall', async () => {
    const validate = (x: number) => {
      throw new Error('validate error')
    }
    const submit = async () => Promise.resolve('ok')
    const workFlow = flow(validate, submit)
    let errorInDotCatch: unknown | null = null
    let errorInTryCatch: unknown | null = null
    try {
      const result = await workFlow(2).catch(e => {
        errorInDotCatch = e
      })
    } catch (error) {
      errorInTryCatch = error
    }
    expect(errorInDotCatch).null
    expect(errorInTryCatch).not.null
  })
})
