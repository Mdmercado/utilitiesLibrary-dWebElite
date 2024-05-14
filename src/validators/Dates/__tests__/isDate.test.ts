import { describe, expect, test } from 'vitest'

import { isDate } from '../isDate'

describe('isDate', () => {
  test('should be return true is date', () => {
    expect(isDate(new Date())).toBe(true)
    expect(isDate(new Date('2024-01-01'))).toBe(true)
    expect(isDate(new Date('2024-01-01T00:00:00'))).toBe(true)
  })

  test('should be return false is not date', () => {
    expect(isDate(1)).toBe(false)
    expect(isDate('a')).toBe(false)
    expect(isDate({})).toBe(false)
    expect(isDate([])).toBe(false)
    expect(isDate(true)).toBe(false)
  })
})
