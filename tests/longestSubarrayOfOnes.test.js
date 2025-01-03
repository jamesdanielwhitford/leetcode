const longestSubarray = require('../solutions/leet_code_75/sliding_window/longestSubarrayOfOnes/longestSubarrayOfOnes');

describe('Longest Subarray of 1s After Deleting One Element Tests', () => {
    test('Example 1: Basic case with one zero', () => {
        expect(longestSubarray([1,1,0,1])).toBe(3);
    });

    test('Example 2: Longer array with multiple zeros', () => {
        expect(longestSubarray([0,1,1,1,0,1,1,0,1])).toBe(5);
    });

    test('Example 3: All ones - must delete one', () => {
        expect(longestSubarray([1,1,1])).toBe(2);
    });

    test('Minimum length array with single element', () => {
        expect(longestSubarray([1])).toBe(0);
    });

    test('All zeros', () => {
        expect(longestSubarray([0,0,0,0])).toBe(0);
    });

    test('Alternating ones and zeros', () => {
        expect(longestSubarray([1,0,1,0,1,0,1])).toBe(2);
    });

    test('Two separate subarrays of ones', () => {
        expect(longestSubarray([1,1,1,0,0,1,1,1])).toBe(3);
    });

    test('Multiple possible optimal solutions', () => {
        expect(longestSubarray([1,1,0,1,1])).toBe(4);
    });

    test('Single zero between ones', () => {
        expect(longestSubarray([1,1,1,0,1,1,1])).toBe(6);
    });

    test('Two consecutive zeros', () => {
        expect(longestSubarray([1,1,0,0,1,1])).toBe(2);
    });

    test('Edge case with zeros at ends', () => {
        expect(longestSubarray([0,1,1,1,0])).toBe(3);
    });
});