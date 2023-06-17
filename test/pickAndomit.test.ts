import { expect, test } from 'vitest'
import { pipe } from '../src/pipe.js'
import { pick, pickFn } from '../src/pick.js'
import { omit, omitFn } from '../src/omit.js'

test('pick and omit', () => {
  const input = { name: 'React', kind: 'FrontEnd', id: 1 }
  const output = { name: 'React', id: 1 }
  expect(pickFn(input, 'id', 'name')).deep.eq(output)
  expect(omitFn(input, 'kind')).deep.eq(output)
  pipe(input, pick('id', 'name'), x => expect(x).deep.eq(output))
  pipe(input, omit('kind'), x => expect(x).deep.eq(output))
})
