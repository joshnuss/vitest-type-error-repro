import { test, expect, beforeEach } from 'vitest'

// results in error:
//
// TypeError: i is not a function
beforeEach(() => [])

test('example test', () => {
  expect(123).toBe(123)
})
