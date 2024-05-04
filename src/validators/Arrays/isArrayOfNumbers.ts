import { isArray } from './isArray'
import { isEmpty } from './isEmpty'

export function isArrayOfType<T>(arr: T[], type: string): boolean {
  if (!isArray(arr) || isEmpty(arr)) return false
  // eslint-disable-next-line valid-typeof
  return arr.every(item => typeof item === type)
}
