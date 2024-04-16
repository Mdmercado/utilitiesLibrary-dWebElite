import { describe, expect, it } from 'vitest'

import { isString } from '../isString'

describe('isString', () => {
  it('should return true when the value is a string', () => {
    expect(isString('')).toBe(true)
    expect(isString('hello')).toBe(true)
    expect(isString('123')).toBe(true)
  })

  it('should return false when the value is not a string', () => {
    expect(isString(12)).toBe(false)
    expect(isString(0)).toBe(false)
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)
    expect(isString({})).toBe(false)
    expect(isString([])).toBe(false)
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)
  })
})
