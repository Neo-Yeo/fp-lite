<div align="center">
<strong>
<samp>

[English](README.md) · [简体中文](README.zh-Hans.md)

</samp>
</strong>
</div>

## A set of Functional Programing style util functions

### This libary is focus on easy to use, only requierd you know a few concect below:

1. Unary function: (input) => output
2. Hight order function: (a) => (b) => c

### Use Case

```typescript
//before
const handleSumbit = async formValues => {
  const values = await validate(formValues)
  const actualValues = await transform(values)
  const result = await post(acutalValues)
  return result
}

//after
const handleSumbitFp = asyncFlow(validate, transform, post)
```

### Begin composition

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

## Functions work with composition function

### Example

```typescript
const datas = [
  { kind: 'frontend', lib: 'React' },
  { kind: 'backend', lib: 'Express' },
]
const result = pipe(
  datas,
  groupBy(v => v.kind),
  g => g.values(),
  toList,
  flat,
  map(v => v.lib)
)
```

1. Array functions (frequently used)  
   `map` | `filter` | `flat` | `concat`
   | `unique` | `deepFlat` | `last` | `first`

2. Functions for Object  
   `pick` | `omit`

3. Function for grouping
   `groupBy` | `separeBy`

4. Functions for condition  
   `maybe` | `notNull` | `isEmpty` | `isZero`

5. Other functions  
   `invoke`

### Some Functions are just alias

`waitAll` = Promise.all()\
`toList` = Array.from()\
`unique` = new Set()

### Normal Functions

`pickFn` | `omitFn` | `groupByFn` | `separeByFn`

## Pitfall

```ts
const validate = () => {
  throw new Error('invalidate')
}

const post = async data => axios.post('/api', data)

const submit = flow(validate, post)

submit({}).catch(e => {
  //never reach, because `validate` is not async function
})
```
