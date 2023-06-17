<div align="center">
<strong>
<samp>

[English](README.md) · [简体中文](README.zh-Hans.md)

</samp>
</strong>
</div>

## 一组函数式风格的工具函数

### 专注于简单易用, 只需要你了解以下概念:

1. 一元函数: (input) => output
2. 高阶函数: (a) => (b) => c

### 使用场景

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

### 组合函数

1.  `flow` 参数都是函数, 返回一个函数

```typescript
const getLength = (x: string) => x.length
const increase = (x: number) => x + 1
const workFlow = flow(getLength, increase)
const result = workFlow('FP') // result = 3
```

2.  `pipe` 第一个参数是值, 后面的参数都是函数

```typescript
const getLength = (x: string) => x.length
const increase = (x: number) => x + 1
const result = pipe('FP', getLength, increase) // result = 3
```

3. `asyncFlow` 所有参数都是异步函数(第一个是,后面不是也行), 执行后返回一个异步函数

```typescript
const workFlow = asyncFlow(fetch, r => r.json(), console.log)
workFlow('http://xx.json')
```

4. `asyncPipe` 第一个参数是一个`Promise`值, 后面的参数都是函数

```typescript
const result = await asyncPipe(fetch('http://xx.json'), r => r.json())
```

5. `asyncReduce` 行为像 Array.reduce, 区别是它只处理异步函数

```typescript
const one = (acc: number) => Promise.resolve(1) // no params async function only
const two = (acc: number) => Promise.resolve(2)
const sum = await asyncReduce([one, two], 0) //3
```

## 下面是跟组合函数一起使用的小函数

### 案列

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

1. 处理数组 (常用的)

`map` | `last` | `first` | `filter` | `flat` | `deepFlat` |`groupBy` | `separeBy` | `unique`

2. 处理对象

`pick` | `omit`

3. 条件判断

`maybe` | `notNull`

4. 其他
   `peek`

### 有些函数只是内建函数的别名

`waitAll` = Promise.all()\
`toList` = Array.from()\
`unique` = new Set()\

### 普通函数

`pickFn` | `omitFn` | `groupByFn` | `separeByFn`

## 陷阱

```ts
const validate = () => {
  throw new 'invalidate'()
}

const post = async data => axios.post('/api', data)

const submit = flow(validate, post) //

submit({}).catch(e => {
  //捕捉不到错误, 因为 `validate` 不是异步函数
})
```
