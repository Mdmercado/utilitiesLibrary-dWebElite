import { describe, expect, test } from 'vitest'

import { isFutureDate } from '../isFutureDate'

describe('isFutureDate', () => {
  test('should return true for future dates', () => {
    expect(isFutureDate(new Date('2024-07-01'))).toBe(true)
    expect(isFutureDate(new Date('2024-12-31'))).toBe(true)
    expect(isFutureDate(new Date('2024-06-15'))).toBe(true)
  })

  test('should return false for past dates', () => {
    expect(isFutureDate(new Date('2020-01-01'))).toBe(false)
    expect(isFutureDate(new Date('2021-12-31'))).toBe(false)
    expect(isFutureDate(new Date('2022-06-15'))).toBe(false)
  })

  test('should return false for non-date inputs', () => {
    expect(isFutureDate(1)).toBe(false)
    expect(isFutureDate('a')).toBe(false)
    expect(isFutureDate({})).toBe(false)
    expect(isFutureDate([])).toBe(false)
    expect(isFutureDate(true)).toBe(false)
  })
})
