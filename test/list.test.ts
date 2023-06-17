import { describe, expect, test } from 'vitest'
import {
  deepFlat,
  first,
  flat,
  groupBy,
  last,
  separeBy,
  toList,
  unique,
} from '../src/list.js'
import { flow } from '../src/flow.js'
import { peek } from '../src/peek.js'
import { pipe } from '../src/pipe.js'

describe('test list functions', () => {
  test('groupBy', () => {
    const list = [
      { name: 'React', kind: 'FrontEnd' },
      { name: 'NextJs', kind: 'FullStack' },
      { name: 'Solid', kind: 'FrontEnd' },
    ]
    const group = pipe(
      list,
      groupBy(v => v.kind)
    )
    expect(group.size).eq(2)
    expect(group.has('FrontEnd')).true
    expect(group.get('FrontEnd')).deep.eq([list[0], list[2]])
    expect(group.has('FullStack')).true
    expect(group.get('FullStack')).deep.eq([list[1]])
  })

  test('separeBy', () => {
    const list = [
      { name: 'React', kind: 'FrontEnd' },
      { name: 'NextJs', kind: 'FullStack' },
      { name: 'Solid', kind: 'FrontEnd' },
    ]
    const results = pipe(
      list,
      separeBy(v => v.kind)
    )
    expect(results.length).eq(2)
    const [frontEndList, fullStackList] = results
    expect(frontEndList).deep.eq([list[0], list[2]])
    expect(fullStackList).deep.eq([list[1]])
  })

  test('tolist unique first,last,flat', () => {
    const list = [
      { name: 'React', kind: 'FrontEnd' },
      { name: 'NextJs', kind: 'FullStack' },
      { name: 'Solid', kind: 'FrontEnd' },
    ]
    const listOut = [
      { name: 'React', kind: 'FrontEnd' },
      { name: 'Solid', kind: 'FrontEnd' },
      { name: 'NextJs', kind: 'FullStack' },
    ]
    pipe(
      list,
      peek(flow(first, x => expect(x).deep.eq(list[0]))),
      peek(flow(last, x => expect(x).deep.eq(list[2]))),
      groupBy(v => v.kind),
      g => g.values(),
      toList,
      flat,
      xs => expect(xs).deep.eq(listOut)
    )
  })
  test('deepFlat,unique,separeBy', () => {
    const heads = [1, 2, 3]
    const tails = [4, 5, 6]
    const list = [heads, [heads], tails]
    pipe(
      list,
      deepFlat(2),
      peek(xs => expect(xs.length).eq(heads.length * 2 + tails.length)),
      unique,
      peek(xs => expect(xs.length).eq(heads.length + tails.length)),
      peek(xs => expect(xs).deep.eq([...heads, ...tails]))
    )
  })
})
