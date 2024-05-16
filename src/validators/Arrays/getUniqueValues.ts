import { isEmpty } from './isEmpty'

export function getUniqueValues<T>(input: T[]): T[] {
  // Stryker disable next-line ConditionalExpression: The true mutant results in an empty array and false mutant follow the next line
  if (isEmpty(input)) return []
  const uniqueSet = new Set(input)
  return Array.from(uniqueSet)
}
