function pipe<A, B>(a: A, b: (x: A) => B): B

function pipe<A, B, C>(a: A, b: (x: A) => B, c: (x: B) => C): C

function pipe<A, B, C, D>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D
): D

function pipe<A, B, C, D, E>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E
): E

function pipe<A, B, C, D, E, F>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F
): F

function pipe<A, B, C, D, E, F, G>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G
): G

function pipe<A, B, C, D, E, F, G, H>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H
): H

function pipe<A, B, C, D, E, F, G, H, I>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I
): I

function pipe<A, B, C, D, E, F, G, H, I, J>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I,
  j: (x: I) => J
): J

function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K
): K

function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L
): L

function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M
): M

function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M,
  n: (x: M) => N
): N

function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M,
  n: (x: M) => N,
  o: (x: N) => O
): O

function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M,
  n: (x: M) => N,
  o: (x: N) => O,
  p: (x: O) => P
): P

function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  a: A,
  b: (x: A) => B,
  c: (x: B) => C,
  d: (x: C) => D,
  e: (x: D) => E,
  f: (x: E) => F,
  g: (x: F) => G,
  h: (x: G) => H,
  i: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M,
  n: (x: M) => N,
  o: (x: N) => O,
  p: (x: O) => P,
  q: (x: P) => Q
): Q

function pipe(a: unknown, ...rest: ((x: unknown) => unknown)[]) {
  return rest.reduce((acc, cur) => cur(acc), a)
}

export { pipe }
