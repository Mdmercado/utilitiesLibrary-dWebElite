import { describe, expect, it } from 'vitest'

import { isUrl } from '../isUrl'

describe('isUrl', () => {
  it('should return true when the input is a valid URL', () => {
    expect(isUrl('https://www.example.com')).toBe(true)
    expect(isUrl('http://example.com')).toBe(true)
    expect(isUrl('https://example.com/path')).toBe(true)
    expect(isUrl('http://example.com/path?query=string')).toBe(true)
    expect(isUrl('https://example.com/#fragment')).toBe(true)
    expect(isUrl('example.com')).toBe(true)
    expect(isUrl('www.example.com')).toBe(true)
  })

  it('should return false when the input is not a valid URL', () => {
    expect(isUrl('http://example')).toBe(false)
    expect(isUrl('http://')).toBe(false)
    expect(isUrl('')).toBe(false)
    expect(isUrl(null)).toBe(false)
    expect(isUrl(undefined)).toBe(false)
    expect(isUrl(123)).toBe(false)
    expect(isUrl({})).toBe(false)
    expect(isUrl([])).toBe(false)
    expect(isUrl(true)).toBe(false)
    expect(isUrl(false)).toBe(false)
  })
})
