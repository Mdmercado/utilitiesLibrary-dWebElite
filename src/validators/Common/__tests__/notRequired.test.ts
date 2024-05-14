import { describe, expect, test } from 'vitest'

import { notRequired } from '../notRequired'

describe('notRequired', () => {
  test('should be return true is undefined, null or empty', () => {
    expect(notRequired(undefined)).toBe(true)
    expect(notRequired(null)).toBe(true)
    expect(notRequired('')).toBe(true)
  })

  test('should be return false is not undefined, null or empty', () => {
    expect(notRequired(1)).toBe(false)
    expect(notRequired('a')).toBe(false)
    expect(notRequired({})).toBe(false)
    expect(notRequired([])).toBe(false)
    expect(notRequired(true)).toBe(false)
  })
})
