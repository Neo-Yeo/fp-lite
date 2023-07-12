/**
 * shorthands for
 * ```ts
 *  pipe(m => m.keys(), it => Array.from(it)) //m is a Map
 * ```
 */
export const takeKeys = <T>(x: { keys: () => IterableIterator<T> }) =>
  Array.from<T>(x.keys())
