function filter<T, S extends T>(f: (x: T) => x is S): (list: T[]) => S[]

function filter<T>(f: (x: T) => unknown): (list: T[]) => T[]

function filter<T>(f: (x: T) => unknown) {
  return (list: T[]) => list.filter(f)
}

export { filter }
