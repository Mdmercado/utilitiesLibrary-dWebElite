import { describe, expect, test } from 'vitest'

import { required } from '../required'

describe('required', () => {
  test('should be return true is not undefined, null or empty', () => {
    expect(required(1)).toBe(true)
    expect(required('a')).toBe(true)
    expect(required({})).toBe(true)
    expect(required([])).toBe(true)
    expect(required(true)).toBe(true)
  })

  test('should be return false is undefined, null or empty', () => {
    expect(required(undefined)).toBe(false)
    expect(required(null)).toBe(false)
    expect(required('')).toBe(false)
  })
})
