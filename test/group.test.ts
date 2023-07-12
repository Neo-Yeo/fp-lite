import { expect, test } from 'vitest'
import { groupBy, pipe } from '../src/index.js'
import { takeKeys } from '../experimental/takeKeys.js'
import { takeValues } from '../experimental/takeValues.js'

test('groupBy', () => {
  const list = ['a', 'b', 1, 2]
  const group = pipe(
    list,
    groupBy(v => (typeof v == 'number' ? 'num' : 'str'))
  )
  expect(takeKeys(group)).deep.eq(['str', 'num'])
  expect(takeValues(group).flat()).deep.eq(list)
})

test('Set', () => {
  const list = ['1', 2, '3']
  const s = new Set(list)
  expect(takeValues(s)).deep.eq(list)
  expect(takeKeys(s)).deep.eq(list)
})
