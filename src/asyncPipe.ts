function asyncPipe<A, B>(a: Promise<A>, b: (x: Awaited<A>) => B): B

function asyncPipe<A, B, C>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C
): C

function asyncPipe<A, B, C, D>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D
): D

function asyncPipe<A, B, C, D, E>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E
): E

function asyncPipe<A, B, C, D, E, F>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F
): F

function asyncPipe<A, B, C, D, E, F, G>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G
): G

function asyncPipe<A, B, C, D, E, F, G, H>(
  a: Promise<A>,
  b: (x: Awaited<A>) => B,
  c: (x: Awaited<B>) => C,
  d: (x: Awaited<C>) => D,
  e: (x: Awaited<D>) => E,
  f: (x: Awaited<E>) => F,
  g: (x: Awaited<F>) => G,
  h: (x: Awaited<G>) => H
): H

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
): I

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
): J

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
): K

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
): L

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
): M

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
): N

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
): O

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
): P

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
): Q

function asyncPipe(a: Promise<unknown>, ...rest: ((x: unknown) => unknown)[]) {
  return rest.reduce((acc, cur) => acc.then(cur), a)
}

export { asyncPipe }
