## A set of Functional Programing style functions

### This libary is focus on easy to use, only requierd you know a few concect below:

1. Unary function: (input) => output
2. Compose functions: pipe(a, a => b, b => c, c => d)
3. Hight order function: (a) => (b) => c

### Functions for composition

1.  `flow` accept functions, return a function

```typescript
const getLength = (x: string) => x.length
const increase = (x: number) => x + 1
const workFlow = flow(getLength, increase)
const result = workFlow('FP') // result = 3
```

2.  `pipe` fisrt param is a value, rest params are functions

```typescript
const getLength = (x: string) => x.length
const increase = (x: number) => x + 1
const result = pipe('FP', getLength, increase) // result = 3
```

3. `asyncFlow` accept async functions, return an async funtion

```typescript
const workFlow = asyncFlow(fetch, r => r.json(), console.log)
workFlow('http://xx.json')
```

4. `asyncPipe` The first param is a Promise, rest params are async functions

```typescript
const result = await asyncPipe(fetch('http://xx.json'), r => r.json())
```

5. `asyncQueue` Only concerned with execution order,

```typescript
const one = () => Promise.resolve(1) // no params async function only
const two = () => Promise.resolve(2)
await asyncQueue(one, two) // async functions
await asyncQueue([one, two]) // or an array of async function
```

### Functions for list data

> high order function, only when you use it in composition function can have intelligent suggestions

`groupBy` | `separeBy` | `unique` | `toList`

```typescript
const datas = [
  { kind: 'frontend', lib: 'React' },
  { kind: 'backend', lib: 'Express' },
]
const grouped = pipe(
  datas,
  groupBy(v => v.kind),
)
```

### Functions for async

`asyncPipe` | `asyncFlow` | `asyncQueue` | `waitAll`

### Array functions (frequently used)

`map` | `last` | `first` | `filter` | `flat` | `deepFlat`

### Functions for Object

`pick` | `omit`

### Functions for condition

`maybe` | `notNull`

### Normal Functions

`pickFn` | `omitFn` | `groupByFn` | `separeByFn`

# Change Log

## <small>0.2.0 (2023-04-02)</small>

- new: function `waitAll`
- update: README.md

## <small>0.1.1 (2023-02-20)</small>

- fix: function `filter` type

## <small>0.1.0 (2023-02-20)</small>

- new: function `asyncQueue`
- change: `first` and `last` as normal funcition
- refactor: `pick` and `omit`

## <small>0.0.4 (2023-02-16)</small>

- fix: `flat` return type
- change: `flat` as normal function
- new: `deepFlat` for `flat(depth)` scene
