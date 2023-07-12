/**
 * invoke a pure function `fn`\
 * the return value of `fn` will be ignore\
 * the `fn` should no change the `x`
 */
export const invoke =
  <T, P extends T = T>(fn: (x: P) => any) =>
  (x: T): T => (fn(x as any), x)
