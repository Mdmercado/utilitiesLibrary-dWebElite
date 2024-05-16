## UTILITIES LIBRARY DEVELOPMENT

### Topic: Validation library related to forms

The main aim of this library is to use validators, which are the core components for validating different values such as arrays, dates, numbers, and more.

## Initial configurations

- Vite [x]
- Eslint .eslintrc [x]
- Prettier .prettierrc [x]
- husky + commitLint (Conventional commits) [x]
- Tests [x]
- Mutation testing (with Stryker) .stryker.config

## Features

> TypeScript support

> Easy to use, extend, test and maintain

> Easy to use with other libraries

> High level in coverage

## Getting Started
Validate an input value by calling a specific validator. All of them are in different folders inside src/validators.

## Table of Contents
- [Numbers](#numbers)
  - isNumber
  - lessThan
  - moreThan

- [Strings](#strings)
  - isString

- [Arrays](#arrays)
  - isArray
  - isEmpty
  - isArrayOfType
  - getUniqueValues

- [Dates](#dates)
  - isDate
  - isFutureDate
  
- [Common](#common)
  - required
  - notRequired

- [Timing](#timing)
  - debounce
  - throttle

- [Misc](#misc)
  - isUrl
  - isEmail


#### Numbers
This section provides a variety of validators for numbers. It allows you to check if an input value is a number, and if it is less than or greater than another number.
  - **isNumber**
    ```
    function isNumber(input: unknown): input is number {
      return typeof input === 'number'
    }
    ```
  - **lessThan**
    ```
    function lessThan(input: unknown, reference: number): boolean {
      if (!isNumber(input)) return false
      return input < reference
    }
    ```
  - **moreThan**
    ```
    function moreThan(input: unknown, reference: number): boolean {
      if (!isNumber(input)) return false
      return input > reference
    }
    ```

#### Strings
This section provides a variety of validators for strings. It allows you to check if an input value is a string or if a string is a valid email.
  - **isString**
    ```
    function isString(input: unknown): input is string {
      return typeof input === 'string'
    }
    ```

#### Arrays
This section provides a variety of validators for arrays. It allows you to check if an input value is an array, if an array is empty, if it is an array of a specific type, or to obtain unique values from an array.

  - **isArray**
    ```
    function isNumber(input: unknown): input is number {
      return typeof input === 'number'
    }
    ```
  - **isEmpty**
    ```
    function lessThan(input: unknown, reference: number): boolean {
      if (!isNumber(input)) return false
      return input < reference
    }
    ```
  - **isArrayOfType**
    ```
    type types = 'number' | 'string'
    export function isArrayOfType<T>(arr: T[], type: types): boolean {
      if (!isArray(arr) || isEmpty(arr)) return false
      return arr.every(item => typeof item == type)
    }
    ```
  - **getUniqueValues**
    ```
    function getUniqueValues<T>(input: T[]): T[] {
      if (isEmpty(input)) return []
      const uniqueSet = new Set(input)
      return Array.from(uniqueSet)
    }
    ```

    
#### Dates
This section provides a couple of validators for dates. It allows you to check if an input value is a date or if a date is in the future.

  - **isDate**
    ```
    function isDate(input: unknown): input is Date {
      return input instanceof Date
    }
    ```
  - **isFutureDate**
    ```
    function isFutureDate(input: unknown): boolean {
      if (!isDate(input)) return false
      return input.getTime() > Date.now()
    } 
    ```
#### Common
This section provides a couple of validators for dates. It allows you to check if an input value is a date or if a date is in the future.
  - **required**
    ```
    function required(input: unknown): boolean {
      return input !== undefined && input !== null && input !== ''
    }

    ```
  - **notRequired**
    ```
    function notRequired(input: unknown): boolean {
      return input === undefined || input === null || input === ''
    } 
    ```
#### Timing
This section provides specific functions for timing. You can use these functions to delay an event by providing the event and the delay duration.
  - **debounce**
    ```
    function debounce<T extends AnyFunction>( fn: T, delay: number ): (...args: Parameters<T>) => void {
      let timeoutId: NodeJS.Timeout
      return function debounceFunction(...args: Parameters<T>): void {
        if (timeoutId !== undefined) clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn(...args), delay)
      }
    }
    ```
  - **throttle**
    ```
    function throttle<T extends AnyFunction>( fn: T, delay: number ): (...args: Parameters<T>) => void {
      let timeoutId: NodeJS.Timeout | undefined
      return function throttleFn(...args: Parameters<T>) {
          if (timeoutId !== undefined) return
          timeoutId = setTimeout(() => {
            timeoutId = undefined
        }, delay)
        return fn(...args)
      }
    }
    ```
#### Misc
This section provides some checkers using regular expressions (Regex).
  - **isUrl**
    ```
    function isUrl(input: unknown): boolean {
      if (!isString(input)) {
        return false
      }
      const pattern =
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g
      return pattern.test(input)
    }
    ```
  - **isEmail**
    ```
    function isEmail(input: unknown): boolean {
      if (!isString(input)) return false
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(input)
    }  
    ```