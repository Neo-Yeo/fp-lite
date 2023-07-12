type NumberKeys<T, K extends keyof T = keyof T> = K extends K
  ? number extends T[K]
    ? K
    : never
  : never

/**
 * @example
 * ```ts
 * pipe(new Map(), isZero('size'))
 * pipe(new Set(), isZero('size'))
 * pipe('', isZero('length'))
 * ```
 */
export const isZero =
  <T, K extends NumberKeys<T>>(k: K) =>
  (x: T) =>
    x[k] === 0
