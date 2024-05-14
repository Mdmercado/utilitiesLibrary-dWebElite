import { isNumber } from './isNumber'

export function lessThan(input: unknown, reference: number): boolean {
  if (!isNumber(input)) return false
  return input < reference
}
