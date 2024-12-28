const longestOnes = require('../solutions/leet_code_75/sliding_window/maxConsecutiveOnes/maxConsectutiveOnes');

describe('Longest Ones Tests', () => {
    test('Basic case with k=2', () => {
        expect(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)).toBe(6);
    });

    test('Array with all zeros and k=2', () => {
        expect(longestOnes([0,0,0,0], 2)).toBe(2);
    });

    test('Array with all ones', () => {
        expect(longestOnes([1,1,1,1], 2)).toBe(4);
    });

    test('Empty array', () => {
        expect(longestOnes([], 2)).toBe(0);
    });

    test('k=0 case', () => {
        expect(longestOnes([1,1,0,0,1,1], 0)).toBe(2);
    });

    test('k equals array length', () => {
        expect(longestOnes([0,0,0,0], 4)).toBe(4);
    });

    test('Alternating ones and zeros with k=2', () => {
        expect(longestOnes([1,0,1,0,1,0], 2)).toBe(5);
    });

    test('Multiple valid windows of same length', () => {
        expect(longestOnes([1,1,0,0,1,1], 1)).toBe(3);
    });
});
