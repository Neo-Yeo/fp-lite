/**
 * peek value only
 * ## Attention
 * this function will have breaking change\
 * on next major version\
 * no more return function and call console.log inside\
 * use `invoke` instead
 */
export const peek =
  <T, P extends T>(fn: (x: P) => void) =>
  (x: T) => (fn(x as P), x)
