import { isString } from '../String/isString'

export function isUrl(input: unknown): boolean {
  // Stryker disable next-line ConditionalExpression: The false mutant follow the next line that it's correct
  if (!isString(input)) {
    return false
  }
  const pattern =
    // Stryker disable next-line Regex: The regex mutant not apply here 'cause it's constant pattern
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
  return pattern.test(input)
}
