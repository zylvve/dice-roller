import { expect, test } from 'vitest'
import { rollDistribution } from './rollDistribution'

test('empty', () => {
  expect(rollDistribution([])).toEqual([
    { rollTotal: 0, count: 1 },
  ]);
})
test('d6 distribution', () => {
  expect(rollDistribution([6])).toEqual([
    { rollTotal: 1, count: 1 },
    { rollTotal: 2, count: 1 },
    { rollTotal: 3, count: 1 },
    { rollTotal: 4, count: 1 },
    { rollTotal: 5, count: 1 },
    { rollTotal: 6, count: 1 },
  ]);
})

test('2d6 distribution', () => {
  expect(rollDistribution([6,6])).toEqual([
    { rollTotal: 2, count: 1 },
    { rollTotal: 3, count: 2 },
    { rollTotal: 4, count: 3 },
    { rollTotal: 5, count: 4 },
    { rollTotal: 6, count: 5 },
    { rollTotal: 7, count: 6 },
    { rollTotal: 8, count: 5 },
    { rollTotal: 9, count: 4 },
    { rollTotal: 10, count: 3 },
    { rollTotal: 11, count: 2 },
    { rollTotal: 12, count: 1 },
  ]);
})

test('2d4+d6 distribution', () => {
  expect(rollDistribution([4,4,6])).toEqual([
    { rollTotal: 3, count: 1 },
    { rollTotal: 4, count: 3 },
    { rollTotal: 5, count: 6 },
    { rollTotal: 6, count: 10 },
    { rollTotal: 7, count: 13 },
    { rollTotal: 8, count: 15 },
    { rollTotal: 9, count: 15 },
    { rollTotal: 10, count: 13 },
    { rollTotal: 11, count: 10 },
    { rollTotal: 12, count: 6 },
    { rollTotal: 13, count: 3 },
    { rollTotal: 14, count: 1 },
  ]);
})
