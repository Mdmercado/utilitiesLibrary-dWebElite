import { describe, expect, it } from 'vitest'

import { moreThan } from '../moreThan'

describe('moreThan', () => {
  it('should return true when the input is more than the reference', () => {
    expect(moreThan(2, 1)).toBe(true)
    expect(moreThan(-1, -2)).toBe(true)
    expect(moreThan(0.1, 0)).toBe(true)
    expect(moreThan(0, -1)).toBe(true)
    expect(moreThan(0, -0.1)).toBe(true)
  })
  it('should return false when the input is not more than the reference', () => {
    expect(moreThan(1, 1)).toBe(false)
    expect(moreThan(0, 0)).toBe(false)
    expect(moreThan(-1, -1)).toBe(false)
    expect(moreThan(0, 1)).toBe(false)
    expect(moreThan(0, 0.1)).toBe(false)
  })
  it('should return false when the input is not a number', () => {
    expect(moreThan(null, 2)).toBe(false)
    expect(moreThan(undefined, 2)).toBe(false)
    expect(moreThan({}, 2)).toBe(false)
    expect(moreThan([], 2)).toBe(false)
    expect(moreThan(true, 2)).toBe(false)
    expect(moreThan(false, 2)).toBe(false)
  })
})
