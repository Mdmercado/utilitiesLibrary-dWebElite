import { describe, expect, it } from 'vitest'

import { lessThan } from '../lessThan'

describe('lessThan', () => {
  it('should return true when the input is less than the reference', () => {
    expect(lessThan(1, 2)).toBe(true)
    expect(lessThan(-1, 0)).toBe(true)
    expect(lessThan(0, 0.1)).toBe(true)
    expect(lessThan(-0.1, 0)).toBe(true)
  })
  it('should return false when the input is not less than the reference', () => {
    expect(lessThan(1, 1)).toBe(false)
    expect(lessThan(0, 0)).toBe(false)
    expect(lessThan(-1, -1)).toBe(false)
    expect(lessThan(0, -1)).toBe(false)
    expect(lessThan(0.1, 0)).toBe(false)
    expect(lessThan(0, -0.1)).toBe(false)
    expect(lessThan('1', 2)).toBe(false)
  })
  it('should return false when the input is not a number', () => {
    expect(lessThan(null, 2)).toBe(false)
    expect(lessThan(undefined, 2)).toBe(false)
    expect(lessThan({}, 2)).toBe(false)
    expect(lessThan([], 2)).toBe(false)
    expect(lessThan(true, 2)).toBe(false)
    expect(lessThan(false, 2)).toBe(false)
  })
})
