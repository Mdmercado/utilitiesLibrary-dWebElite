import { describe, expect, it } from 'vitest'

import { isEmail } from '../isEmail'

describe('isEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isEmail('test@example.com')).toBe(true)
    expect(isEmail('john.doe@gmail.com')).toBe(true)
    expect(isEmail('jane_doe123@yahoo.co.uk')).toBe(true)
  })

  it('should return false for invalid email addresses', () => {
    expect(isEmail('notanemail')).toBe(false)
    expect(isEmail('john.doe@gmail')).toBe(false)
    expect(isEmail('jane_doe123@')).toBe(false)
    expect(isEmail('test@example')).toBe(false)
  })

  it('should return false for non-string inputs', () => {
    expect(isEmail(123)).toBe(false)
    expect(isEmail(null)).toBe(false)
    expect(isEmail(undefined)).toBe(false)
    expect(isEmail({})).toBe(false)
    expect(isEmail([])).toBe(false)
  })
})
