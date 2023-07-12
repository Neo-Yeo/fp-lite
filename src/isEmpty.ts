/**
 * check object or array is empty\
 * ⚠️ empty item in array will be ignore\
 * because it can not work with .map and other array functions
 * @example
 * ```ts
 * const emptyArray = Array(10)
 * const length = emptyArray.length // 10
 * isEmpty(Array(10)) // true
 * ```
 * for other type such `Map` `Set` `String`\
 * use `isZero` instead
 */
export const isEmpty = (x: Record<PropertyKey, any> | ReadonlyArray<any>) =>
  Object.keys(x).length === 0
