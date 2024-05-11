import { describe, expect, test } from 'vitest'

import { isArrayOfType } from '../isArrayOfType'

describe('getUniqueValues', () => {
  test('should be return true if array has the same typeof for each element', () => {
    const arrNumbers = [1, 2, 3]
    const arrStrings = ['hola', 'pepe', 'mujica']

    expect(isArrayOfType(arrNumbers, 'number')).toBe(true)
    expect(isArrayOfType(arrStrings, 'string')).toBe(true)
  })

  test('should be return false if array has different types', () => {
    const arrOfAnyTypes = [1, 'jeje', true]

    expect(isArrayOfType(arrOfAnyTypes, 'string')).toBe(false)
  })

  test('should be return false if array is empty', () => {
    expect(isArrayOfType([], 'number')).toBe(false)
  })
})
