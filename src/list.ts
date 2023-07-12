export const map =
  <T, R>(f: (x: T) => R) =>
  (list: T[]) =>
    list.map(x => f(x))

export const flat = <T>(list: T[]) => list.flat<T[], 1>()

export const deepFlat =
  <T extends any[], Depth extends number = 1>(depth?: Depth) =>
  (list: T) =>
    list.flat<T, Depth>(depth)

export const first = <T>(list: T[]): T | undefined => list[0]

export const last = <T>(list: T[]) =>
  list.length > 0 ? list[list.length - 1] : undefined

export const groupByFn = <T, R>(arr: T[], keyMaker: (x: T) => R): Map<R, T[]> =>
  arr.reduce((acc, cur) => {
    const k = keyMaker(cur)
    acc.has(k) ? acc.get(k).push(cur) : acc.set(k, [cur])
    return acc
  }, new Map())

export const separeByFn = <T>(arr: T[], keyMaker: (x: T) => string): T[][] =>
  toList(groupByFn(arr, keyMaker).values())

export const separeBy =
  <T>(keyMaker: (x: T) => string) =>
  (arr: T[]): T[][] =>
    separeByFn(arr, keyMaker)

export const groupBy =
  <T, R>(keyMaker: (x: T) => R) =>
  (arr: T[]): Map<R, T[]> =>
    groupByFn(arr, keyMaker)

export const notNull = <T>(x: T): x is NonNullable<T> => x != null

export const unique = <T>(arr: T[]) => [...new Set(arr)]

export const toList = <T>(xs: Iterable<T> | ArrayLike<T>) => Array.from(xs)

export const waitAll = <T extends Parameters<typeof Promise.all>[0]>(ps: T) =>
  Promise.all(ps)
;[1, 2].concat(1)
/** concat array */
export const concat =
  <T>(...ys: (readonly T[] | T)[]) =>
  (xs: T[] | readonly T[]) =>
    xs.concat(...ys)
