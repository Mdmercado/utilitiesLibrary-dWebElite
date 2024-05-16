import { isString } from '../String/isString'

export function isEmail(input: unknown): boolean {
  if (!isString(input)) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(input)
}
