export const omitFn = <T, Keys extends ReadonlyArray<keyof T>>(
  x: T,
  ...keys: Keys
) =>
  keys.reduce((acc, k) => (delete acc[k], acc), { ...x }) as {
    [K in Exclude<keyof T, Keys[number]>]: T[K]
  }

export const omit =
  <T, Keys extends ReadonlyArray<keyof T>>(...keys: Keys) =>
  (x: T) =>
    omitFn(x, ...keys)
