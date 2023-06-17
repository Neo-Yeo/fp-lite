function asyncFlow<A extends ReadonlyArray<unknown>, B>(
  a: (...a: A) => Promise<B>,
): (...args: A) => B

function asyncFlow<A extends ReadonlyArray<unknown>, B, C>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
): (...args: A) => C

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
): (...args: A) => D

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
): (...args: A) => E

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
): (...args: A) => F

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
): (...args: A) => G

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
): (...args: A) => H

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
): (...args: A) => I

function asyncFlow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
  a: (...a: A) => Promise<B>,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
): (...args: A) => J

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
): (...args: A) => K

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
): (...args: A) => L

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
): (...args: A) => M

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
): (...args: A) => N

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
): (...args: A) => O

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
): (...args: A) => P

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
  Q,
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
  q: (x: Awaited<P>) => Q,
): (...args: A) => Q

function asyncFlow(
  ...[first, ...rest]: ((...args: ReadonlyArray<unknown>) => Promise<unknown>)[]
) {
  return (...args: ReadonlyArray<unknown>) =>
    rest.reduce((acc, cur) => acc.then(cur), first(...args))
}

export { asyncFlow }
