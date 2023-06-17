/**
 * if `v` not null or undefined, excute `fn`\
 * required tsconfig { "strictNullChecks": true}
 */
export const maybe =
  <T, R>(fn: (x: T) => R) =>
  (v: undefined | null | T): R | null =>
    v != null ? fn(v) : null
