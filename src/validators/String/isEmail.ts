import { isString } from './isString'

/**
 * Checks if the given input is a valid email address.
 *
 * @param input - The string to be validated as an email address.
 * @returns A boolean indicating whether the input is a valid email address.
 */
export function isEmail(input: string): boolean {
  if (!isString(input)) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(input)
}
