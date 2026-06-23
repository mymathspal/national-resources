/*
  lib/validator.js
  =================
  Defines the test cases to be run.
  10 tests total - 2 per function
*/

window.__TESTS__ = [
  // capitalize (2 tests)
  {
    name: 'Capitalize - hello world',
    fn: 'capitalize',
    args: ['hello world'],
    expected: 'Hello World',
  },
  {
    name: 'Capitalize - longer sentence',
    fn: 'capitalize',
    args: ['the quick brown fox'],
    expected: 'The Quick Brown Fox',
  },

  // clamp (2 tests)
  {
    name: 'Clamp - in range',
    fn: 'clamp',
    args: [5, 0, 10],
    expected: 5,
  },
  {
    name: 'Clamp - below min',
    fn: 'clamp',
    args: [-3, 0, 10],
    expected: 0,
  },

  // unique (2 tests)
  {
    name: 'Unique - numbers',
    fn: 'unique',
    args: [[1, 2, 2, 3, 1]],
    expected: [1, 2, 3],
  },
  {
    name: 'Unique - strings',
    fn: 'unique',
    args: [['a', 'b', 'a', 'c', 'b']],
    expected: ['a', 'b', 'c'],
  },

  // digitSum (2 tests)
  {
    name: 'DigitSum - 123',
    fn: 'digitSum',
    args: [123],
    expected: 6,
  },
  {
    name: 'DigitSum - 9999',
    fn: 'digitSum',
    args: [9999],
    expected: 36,
  },

  // chunk (2 tests)
  {
    name: 'Chunk - uneven split',
    fn: 'chunk',
    args: [[1, 2, 3, 4, 5], 2],
    expected: [[1, 2], [3, 4], [5]],
  },
  {
    name: 'Chunk - size equals length',
    fn: 'chunk',
    args: [['a', 'b', 'c', 'd'], 4],
    expected: [['a', 'b', 'c', 'd']],
  },
];
