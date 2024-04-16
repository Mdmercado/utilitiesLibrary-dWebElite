import { isDate } from './isDate'

export function isFutureDate(input: unknown): boolean {
  if (!isDate(input)) return false
  return input.getTime() > Date.now()
}
