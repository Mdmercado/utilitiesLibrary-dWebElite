import { isNumber } from './isNumber'

export function moreThan(input: unknown, reference: number): boolean {
  if (!isNumber(input)) return false
  return input > reference
}
