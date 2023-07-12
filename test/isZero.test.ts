import { expect, test } from 'vitest'
import { isZero, pipe } from '../src/index.js'

test('check is zero', () => {
  expect(pipe(new Map([]), isZero('size')), 'size of empty Map should be zero')
    .true
  expect(pipe(new Set([]), isZero('size')), 'size of Set  should be zero').true
  expect(pipe('', isZero('length')), 'length of empty string should be zero')
    .true
})

test('check not zero', () => {
  expect(
    pipe(new Map([[1, 3]]), isZero('size')),
    'size of  Map[1,3] should not be zero'
  ).false
  expect(
    pipe(new Set([1, 3, 4]), isZero('size')),
    'size of Set[1,3,4] should not zero'
  ).false
  expect(pipe('abc', isZero('length')), 'length of "abc" should not be zero')
    .false
})
