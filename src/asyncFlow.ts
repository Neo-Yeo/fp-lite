function asyncFlow<A extends ReadonlyArray<unknown>, B>(
  a: (...a: A) => Promise<B>
): (...args: A) => Promise<Awaited<B>>

function asyncFlow<A extends ReadonlyArray<unknown>, B, C>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C
): (...args: A) => Promise<Awaited<C>>

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D
): (...args: A) => Promise<Awaited<D>>

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E
): (...args: A) => Promise<Awaited<E>>

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F
): (...args: A) => Promise<Awaited<F>>

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G
): (...args: A) => Promise<Awaited<G>>

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H
): (...args: A) => Promise<Awaited<H>>

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I
): (...args: A) => Promise<Awaited<I>>

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J
): (...args: A) => Promise<Awaited<J>>

function asyncFlow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K
>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
  k: (x: Awaited<J>) => K
): (...args: A) => Promise<Awaited<K>>

function asyncFlow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L
>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
  k: (x: Awaited<J>) => K,
  l: (x: Awaited<K>) => L
): (...args: A) => Promise<Awaited<L>>

function asyncFlow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M
>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
  k: (x: Awaited<J>) => K,
  l: (x: Awaited<K>) => L,
  m: (x: Awaited<L>) => M
): (...args: A) => Promise<Awaited<M>>

function asyncFlow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N
>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
  k: (x: Awaited<J>) => K,
  l: (x: Awaited<K>) => L,
  m: (x: Awaited<L>) => M,
  n: (x: Awaited<M>) => N
): (...args: A) => Promise<Awaited<N>>

function asyncFlow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O
>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
  k: (x: Awaited<J>) => K,
  l: (x: Awaited<K>) => L,
  m: (x: Awaited<L>) => M,
  n: (x: Awaited<M>) => N,
  o: (x: Awaited<N>) => O
): (...args: A) => Promise<Awaited<O>>

function asyncFlow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P
>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
  k: (x: Awaited<J>) => K,
  l: (x: Awaited<K>) => L,
  m: (x: Awaited<L>) => M,
  n: (x: Awaited<M>) => N,
  o: (x: Awaited<N>) => O,
  p: (x: Awaited<O>) => P
): (...args: A) => Promise<Awaited<P>>

function asyncFlow<
  A extends ReadonlyArray<unknown>,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q
>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
  k: (x: Awaited<J>) => K,
  l: (x: Awaited<K>) => L,
  m: (x: Awaited<L>) => M,
  n: (x: Awaited<M>) => N,
  o: (x: Awaited<N>) => O,
  p: (x: Awaited<O>) => P,
  q: (x: Awaited<P>) => Q
): (...args: A) => Promise<Awaited<Q>>

function asyncFlow(
  ...[first, ...rest]: ((...args: ReadonlyArray<unknown>) => Promise<unknown>)[]
) {
  return (...args: ReadonlyArray<unknown>) =>
    rest.reduce((acc, cur) => acc.then(cur), first(...args))
}

export { asyncFlow }
