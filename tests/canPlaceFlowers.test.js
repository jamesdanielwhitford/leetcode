// File: tests/canPlaceFlowers.test.js
const canPlaceFlowers = require('../solutions/leet_code_75/arrays_strings/canPlaceFlowers/canPlaceFlowers');

// Function to create a deep copy of array to prevent test interference
const cloneArray = (arr) => [...arr];

describe('Can Place Flowers', () => {
  // Basic functionality tests
  test('should return true when n = 1 and there is space for one flower', () => {
    expect(canPlaceFlowers(cloneArray([1, 0, 0, 0, 1]), 1)).toBe(true);
  });

  test('should return false when n = 2 and there is not enough space', () => {
    expect(canPlaceFlowers(cloneArray([1, 0, 0, 0, 1]), 2)).toBe(false);
  });

  test('should return true when n = 0', () => {
    expect(canPlaceFlowers(cloneArray([1, 0, 0, 0, 1]), 0)).toBe(true);
  });

  // Edge cases with array boundaries
  test('should handle empty plots at the beginning', () => {
    expect(canPlaceFlowers(cloneArray([0, 0, 1, 0, 1]), 1)).toBe(true);
    expect(canPlaceFlowers(cloneArray([0, 0, 1, 0, 1]), 2)).toBe(false);
  });

  test('should handle empty plots at the end', () => {
    expect(canPlaceFlowers(cloneArray([1, 0, 0, 0, 0]), 2)).toBe(true);
    expect(canPlaceFlowers(cloneArray([1, 0, 0, 0, 0]), 3)).toBe(false);
  });

  // Special cases
  test('should handle single element array', () => {
    expect(canPlaceFlowers(cloneArray([0]), 1)).toBe(true);
    expect(canPlaceFlowers(cloneArray([1]), 1)).toBe(false);
    expect(canPlaceFlowers(cloneArray([0]), 2)).toBe(false);
  });

  test('should handle array with all zeros', () => {
    expect(canPlaceFlowers(cloneArray([0, 0, 0, 0]), 2)).toBe(true);
    expect(canPlaceFlowers(cloneArray([0, 0, 0, 0]), 3)).toBe(false);
  });

  test('should handle array with all ones', () => {
    expect(canPlaceFlowers(cloneArray([1, 1, 1, 1, 1]), 1)).toBe(false);
    expect(canPlaceFlowers(cloneArray([1, 1, 1, 1, 1]), 0)).toBe(true);
  });

  // Pattern tests
  test('should handle alternating patterns', () => {
    expect(canPlaceFlowers(cloneArray([1, 0, 1, 0, 1, 0, 1]), 1)).toBe(false);
    expect(canPlaceFlowers(cloneArray([1, 0, 1, 0, 1, 0, 0]), 1)).toBe(true);
  });

  test('should handle uneven gaps', () => {
    expect(canPlaceFlowers(cloneArray([0, 1, 0, 0, 1, 0, 0]), 2)).toBe(false);
    expect(canPlaceFlowers(cloneArray([0, 1, 0, 0, 0, 0, 0]), 2)).toBe(true);
  });
});