// File: tests/canPlaceFlowers.test.js
const canPlaceFlowers = require('../solutions/canPlaceFlowers');
const GenericPerformanceTest = require('../utils/genericPerformanceTest');

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

  // Input mutation tests
  test('should not modify input array when no flowers can be planted', () => {
    const input = [1, 0, 1, 0, 1];
    const inputCopy = [...input];
    canPlaceFlowers(input, 1);
    expect(input).toEqual(inputCopy);
  });

  // Performance tests
  test('should handle large inputs efficiently', () => {
    // Create an array of 10000 elements with alternating 0s and 1s
    const largeInput = new Array(10000).fill(0).map((_, i) => i % 2);
    
    const result = GenericPerformanceTest.measure(
      canPlaceFlowers,
      [largeInput, 2500],
      100
    );
    
    // Test should complete in less than 100ms for 100 iterations
    expect(result.timeMs).toBeLessThan(100);
  });

  test('should handle worst-case scenario efficiently', () => {
    // Create an array of 10000 zeros where we need to check every position
    const worstCase = new Array(10000).fill(0);
    
    const result = GenericPerformanceTest.measure(
      canPlaceFlowers,
      [worstCase, 5000],
      10
    );
    
    // Even worst case should complete in less than 500ms for 10 iterations
    expect(result.timeMs).toBeLessThan(500);
  });
});