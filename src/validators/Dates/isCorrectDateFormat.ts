import { isDate } from './isDate'

export function isCorrectDateFormat(input: Date): boolean {
  if (!isDate(input)) return false
  const regexFormat =
    /^(0[1-9]|[12]\d|3[01])[-.](0[1-9]|1[0-2])[-.](19|20)\d{2}$/
  return regexFormat.test(input.toDateString())
}
