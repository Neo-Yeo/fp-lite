function flow<A extends ReadonlyArray<unknown>, B>(
  a: (...a: A) => B
): (...args: A) => B

function flow<A extends ReadonlyArray<unknown>, B, C>(
  a: (...a: A) => B,
  b: (x: B) => C
): (...args: A) => C

function flow<A extends ReadonlyArray<unknown>, B, C, D>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D
): (...args: A) => D

function flow<A extends ReadonlyArray<unknown>, B, C, D, E>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  e: (x: D) => E
): (...args: A) => E

function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F
): (...args: A) => F

function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G
): (...args: A) => G

function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H
): (...args: A) => H

function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I
): (...args: A) => I

function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I,
  j: (x: I) => J
): (...args: A) => J

function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F, G, H, I, J, K>(
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K
): (...args: A) => K

function flow<
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
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L
): (...args: A) => L

function flow<
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
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M
): (...args: A) => M

function flow<
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
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M,
  n: (x: M) => N
): (...args: A) => N

function flow<
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
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M,
  n: (x: M) => N,
  o: (x: N) => O
): (...args: A) => O

function flow<
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
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M,
  n: (x: M) => N,
  o: (x: N) => O,
  p: (x: O) => P
): (...args: A) => P

function flow<
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
  a: (...a: A) => B,
  b: (x: B) => C,
  c: (x: C) => D,
  d: (x: D) => E,
  e: (x: E) => F,
  f: (x: F) => G,
  g: (x: G) => H,
  h: (x: H) => I,
  j: (x: I) => J,
  k: (x: J) => K,
  l: (x: K) => L,
  m: (x: L) => M,
  n: (x: M) => N,
  o: (x: N) => O,
  p: (x: O) => P,
  q: (x: P) => Q
): (...args: A) => Q

function flow(
  ...[first, ...rest]: ((...args: ReadonlyArray<unknown>) => unknown)[]
) {
  return (...args: ReadonlyArray<unknown>) =>
    rest.reduce((acc, cur) => cur(acc), first(...args))
}

export { flow }
// const len = (s: string): number => s.length
// const double = (n: number): number => n * 2

// const f = flow(len, double)
