import { isArray } from './isArray'
import { isEmpty } from './isEmpty'

export function isArrayOfNumbers(input: []): boolean {
  if (!isArray(input)) return false
  if (isEmpty(input)) return false
  return !input.some(element => typeof element !== 'number')
}
