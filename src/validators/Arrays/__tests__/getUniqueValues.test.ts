import { describe, expect, test } from 'vitest'

import { getUniqueValues } from '../getUniqueValues'

describe('getUniqueValues', () => {
  test('should return an empty array if it is empty', () => {
    const arr: unknown[] = []
    expect(getUniqueValues(arr)).toStrictEqual([])
  })

  test('should return the same value when there are no duplicates', () => {
    const values = [1, 'a', true]
    expect(getUniqueValues(values)).toStrictEqual(values)
  })

  test('should return the unique values when there are duplicates', () => {
    const values = ['a', 'b', 'c', 'a']
    expect(getUniqueValues(values)).toStrictEqual(['a', 'b', 'c'])
  })

  test('should return the unique values when there are duplicates no matter the types of them', () => {
    const values = ['a', 'b', 'c', 'a', 1, 2, 4, 2]
    expect(getUniqueValues(values)).toStrictEqual(['a', 'b', 'c', 1, 2, 4])
  })
})
