import { describe, expect, test } from 'vitest'

import { isArray } from '../isArray'

describe('isArray', () => {
  test.each([
    [[1, 2, 3], true],
    [['a', 'b'], true],
    [{}, false],
    ['abc', false],
    [2, false],
    [null, false],
    [undefined, false]
  ])('should return %j when given %j', (arg, expected) => {
    expect(isArray(arg)).toStrictEqual(expected)
  })
})
