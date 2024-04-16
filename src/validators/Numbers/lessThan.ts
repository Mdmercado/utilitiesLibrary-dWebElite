import { isNumber } from './isNumber'

export function lessThan(input: number, reference: number): boolean {
  if (!isNumber(input)) return false
  return input < reference
}
