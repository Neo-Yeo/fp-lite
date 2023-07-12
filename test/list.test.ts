import { describe, expect, test } from 'vitest'
import {
  concat,
  deepFlat,
  first,
  flat,
  groupBy,
  invoke,
  last,
  pipe,
  separeBy,
  toList,
  unique,
} from '../src/index.js'

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
    const newLocal = pipe(
      list,
      invoke(xs => expect(xs[0]).deep.eq(list[0])),
      x => x,
      invoke(xs => expect(xs.at(-1)).deep.eq(list[2])),
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
      invoke(xs => expect(xs.length).eq(heads.length * 2 + tails.length)),
      unique,
      invoke(xs => expect(xs.length).eq(heads.length + tails.length)),
      invoke(xs => expect(xs).deep.eq([...heads, ...tails]))
    )
  })
  test('concat both input is array', () => {
    const readonlyList: readonly number[] = [1, 2, 3]
    const list: number[] = [4, 5, 6]
    pipe(readonlyList, concat(list), xs =>
      expect(xs).deep.eq([...readonlyList, ...list])
    )
    pipe(list, concat(readonlyList), xs =>
      expect(xs).deep.eq([...list, ...readonlyList])
    )
  })
  test('concat complex input', () => {
    const leader = 3
    const list: number[] = [4, 5, 6]
    pipe([leader], concat(list, 5, 6), xs =>
      expect(xs).deep.eq([leader, ...list, 5, 6])
    )
    pipe(list, concat(leader), xs => expect(xs).deep.eq([...list, leader]))
  })
  test('first', () => {
    const list = [1, 2, 3]
    pipe(list, first, x => expect(x).eq(list[0]))
  })
  test('last', () => {
    const list = [1, 2, 3]
    pipe(list, last, x => expect(x).eq(list[2]))
  })
})
