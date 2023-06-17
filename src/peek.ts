/**
 * peek value only
 */
export const peek =
  <T>(fn: (x: T) => void) =>
  (x: T) => (fn(x), x)
