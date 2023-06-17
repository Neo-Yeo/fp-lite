type AsyncReduceFn = <T>(
  fns: ((x: T) => Promise<T>)[],
  initialValue: T
) => Promise<T>

export const asyncReduce: AsyncReduceFn = (fns, initial) => {
  const [first, ...rest] = fns
  return rest.reduce((acc, fn) => acc.then(fn), first(initial))
}
