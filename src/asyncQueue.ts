type ListFn = Array<() => Promise<any>>

/**
 * Only concerned with the execution order
 */
export async function asyncQueue(...fns: ListFn | Array<ListFn>) {
  const [first, ...rest] = [...fns].flat()
  return rest.reduce((acc, cur) => acc.then(cur), first())
}
