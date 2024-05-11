import { isArray } from './isArray'
import { isEmpty } from './isEmpty'

type types = 'number' | 'string'

export function isArrayOfType<T>(arr: T[], type: types): boolean {
  if (!isArray(arr) || isEmpty(arr)) return false
  // eslint-disable-next-line
  return arr.every(item => typeof item == type)
}
