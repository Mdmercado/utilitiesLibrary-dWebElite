import { type AnyFunction } from '@/types'

export function throttle<T extends AnyFunction>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | undefined

  return function throttleFn(...args: Parameters<T>) {
    if (timeoutId !== undefined) return
    timeoutId = setTimeout(() => {
      timeoutId = undefined
    }, delay)

    return fn(...args)
  }
}
