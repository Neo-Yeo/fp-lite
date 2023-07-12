/**
 * shorthands for
 * ```ts
 * pipe(m => m.values(), it => Array.from(it)) //m is a Map
 * ```
 */
export const takeValues = <T>(x: { values: () => IterableIterator<T> }) =>
  Array.from<T>(x.values())
