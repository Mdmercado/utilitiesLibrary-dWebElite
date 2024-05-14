import { beforeEach, describe, expect, it, vi } from 'vitest'

import { throttle } from '../throttle'

describe('throttle', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should throttle a function one time', () => {
    const fn = vi.fn()
    const throttleFn = throttle(fn, 200)
    throttleFn()
    throttleFn()
    expect(fn).toHaveBeenCalledTimes(1)
  })
  it('should throttle a function two times', () => {
    const fn = vi.fn()
    const throttleFn = throttle(fn, 200)
    throttleFn()
    throttleFn()
    vi.advanceTimersByTime(300)
    expect(fn).toHaveBeenCalledTimes(1)
    throttleFn()
    throttleFn()
    throttleFn()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
