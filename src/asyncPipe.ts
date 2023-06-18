function asyncPipe<A, B>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B
): Promise<Awaited<B>>

function asyncPipe<A, B, C>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C
): Promise<Awaited<C>>

function asyncPipe<A, B, C, D>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D
): Promise<Awaited<D>>

function asyncPipe<A, B, C, D, E>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E
): Promise<Awaited<E>>

function asyncPipe<A, B, C, D, E, F>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F
): Promise<Awaited<F>>

function asyncPipe<A, B, C, D, E, F, G>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G
): Promise<Awaited<G>>

function asyncPipe<A, B, C, D, E, F, G, H>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H
): Promise<Awaited<H>>

function asyncPipe<A, B, C, D, E, F, G, H, I>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I
): Promise<Awaited<I>>

function asyncPipe<A, B, C, D, E, F, G, H, I, J>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J
): Promise<Awaited<J>>

function asyncPipe<A, B, C, D, E, F, G, H, I, J, K>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H,
  i: (x: Awaited<H>) => I,
  j: (x: Awaited<I>) => J,
  k: (x: Awaited<J>) => K
): Promise<Awaited<K>>

function asyncPipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
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
): Promise<Awaited<L>>

function asyncPipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
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
): Promise<Awaited<M>>

function asyncPipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
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
): Promise<Awaited<N>>

function asyncPipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
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
): Promise<Awaited<O>>

function asyncPipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
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
): Promise<Awaited<P>>

function asyncPipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
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
): Promise<Awaited<Q>>

function asyncPipe(a: Promise<unknown>, ...rest: ((x: unknown) => unknown)[]) {
  return rest.reduce((acc, cur) => acc.then(cur), a)
}

export { asyncPipe }
