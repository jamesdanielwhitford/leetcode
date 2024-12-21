const findMaxAverage = require('../solutions/leet_code_75/sliding_window/maximumAverageSubarray/maximumAverageSubarray');

describe('Find Maximum Average Subarray', () => {
    // Basic functionality tests
    test('should handle the example case correctly', () => {
        expect(findMaxAverage([1,12,-5,-6,50,3], 4)).toBeCloseTo(12.75, 5);
    });

    test('should handle single element array', () => {
        expect(findMaxAverage([5], 1)).toBeCloseTo(5.0, 5);
    });

    // Edge cases
    test('should handle when k equals array length', () => {
        expect(findMaxAverage([1,2,3,4], 4)).toBeCloseTo(2.5, 5);
        expect(findMaxAverage([-1], 1)).toBeCloseTo(-1.0, 5);
    });

    // Pattern tests
    test('should handle alternating patterns', () => {
        expect(findMaxAverage([1,-1,1,-1,1,-1], 2)).toBeCloseTo(0.0, 5);
        expect(findMaxAverage([1,-1,1,-1,1,-1], 3)).toBeCloseTo(0.333333333333333, 5);
    });

    // Special cases
    test('should handle array with all same numbers', () => {
        expect(findMaxAverage([5,5,5,5,5], 2)).toBeCloseTo(5.0, 5);
        expect(findMaxAverage([0,0,0,0], 2)).toBeCloseTo(0.0, 5);
    });

    test('should handle extreme values within constraints', () => {
        expect(findMaxAverage([10000,-10000], 1)).toBeCloseTo(10000.0, 5);
        expect(findMaxAverage([-10000,10000], 2)).toBeCloseTo(0.0, 5);
    });

    // Precision tests
    test('should handle decimal precision', () => {
        expect(findMaxAverage([1,2,3], 3)).toBeCloseTo(2.0, 5);
        expect(findMaxAverage([1.5,2.5,3.5], 2)).toBeCloseTo(3.0, 5);
    });
});