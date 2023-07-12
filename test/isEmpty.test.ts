import { expect, test } from 'vitest'
import { isEmpty } from '../src/index.js'

test('check not empty', () => {
  expect(isEmpty({ a: '1' }), 'object {a:"1"} should not be empty').false
  expect(isEmpty([1]), 'array [1] should not be empty').false
})

test('check is empty', () => {
  expect(isEmpty({}), 'object {} should be empty').true
  expect(isEmpty([, ,]), 'array with not actual value [,,] should be empty')
    .true
})
