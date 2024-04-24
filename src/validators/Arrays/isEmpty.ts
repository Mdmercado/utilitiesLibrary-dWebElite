import { isArray } from './isArray'

export function isEmpty(input: unknown[]): boolean {
  if (isArray(input)) return input.length === 0
  return false
}
