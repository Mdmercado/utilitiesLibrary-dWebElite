import { beforeEach, describe, expect, test, vi } from 'vitest'

import { debounce } from '../debounce'

describe('debounce', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  test('should not debounce a generic function', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 200)
    debouncedFn()
    debouncedFn()
    vi.advanceTimersByTime(100)
    expect(fn).toHaveBeenCalledTimes(0)
  })
  test('should debounce a generic function one time', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 200)
    debouncedFn()
    debouncedFn()
    debouncedFn()
    debouncedFn()
    vi.advanceTimersByTime(300)
    expect(fn).toHaveBeenCalledTimes(1)
  })
  test('should debounce a generic function two times', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn, 200)
    debouncedFn()
    debouncedFn()
    vi.advanceTimersByTime(300)
    expect(fn).toHaveBeenCalledTimes(1)
    debouncedFn()
    vi.advanceTimersByTime(400)
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
