import { describe, expect, test } from 'vitest'

import { isEmpty } from '../isEmpty'

describe('Is isEmpty array', () => {
  test.each([
    [null, false],
    ['', false],
    [{}, false],
    [[1], false],
    [[], true],
    [0, false],
    [undefined, false]
  ])('should return %j when given %j', (arg, expected) => {
    // @ts-expect-error should accept any value
    expect(isEmpty(arg)).toStrictEqual(expected)
  })
})
