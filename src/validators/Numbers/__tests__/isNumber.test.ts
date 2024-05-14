import { describe, expect, it } from 'vitest'

import { isNumber } from '../isNumber'

describe('isNumber', () => {
  it('should return true when the input is a number', () => {
    expect(isNumber(123)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(-123)).toBe(true)
    expect(isNumber(0.123)).toBe(true)
    expect(isNumber(-0.123)).toBe(true)
  })

  it('should return false when the input is not a number', () => {
    expect(isNumber('123')).toBe(false)
    expect(isNumber('0')).toBe(false)
    expect(isNumber('-123')).toBe(false)
    expect(isNumber('0.123')).toBe(false)
    expect(isNumber('-0.123')).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
  })
})
