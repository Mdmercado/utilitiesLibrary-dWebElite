import { isEmpty } from './isEmpty'

export function getUniqueValues<T>(input: T[]): T[] {
  if (isEmpty(input)) return []
  const uniqueSet = new Set(input)
  return Array.from(uniqueSet)
}
