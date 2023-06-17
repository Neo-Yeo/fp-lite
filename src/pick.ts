export const pickFn = <T, Keys extends ReadonlyArray<keyof T>>(
  x: T,
  ...keys: Keys | ReadonlyArray<keyof T>
) =>
  keys.reduce(
    (acc, k) => ((acc[k] = x[k]), acc),
    {} as { [K in Keys[number]]: T[K] }
  )

export const pick =
  <T, Keys extends ReadonlyArray<keyof T>>(
    ...keys: Keys | ReadonlyArray<keyof T>
  ) =>
  (x: T) =>
    pickFn(x, ...keys)
