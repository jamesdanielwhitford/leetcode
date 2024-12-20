
const maxOperations = require('../solutions/leet_code_75/two_pointers/maxNumberOfKSumPairs/maxNumberOfKSumPairs');

describe('maxOperations', () => {
    test('should return 2 for nums = [1,2,3,4] and k = 5', () => {
        const nums = [1, 2, 3, 4];
        const k = 5;
        expect(maxOperations(nums, k)).toBe(2);
    });

    test('should return 1 for nums = [3,1,3,4,3] and k = 6', () => {
        const nums = [3, 1, 3, 4, 3];
        const k = 6;
        expect(maxOperations(nums, k)).toBe(1);
    });

    test('should return 0 for empty array', () => {
        const nums = [];
        const k = 5;
        expect(maxOperations(nums, k)).toBe(0);
    });

    test('should return 0 when no pairs sum to k', () => {
        const nums = [1, 2, 3, 4];
        const k = 10;
        expect(maxOperations(nums, k)).toBe(0);
    });

    test('should handle array with duplicate numbers', () => {
        const nums = [2, 2, 2, 2];
        const k = 4;
        expect(maxOperations(nums, k)).toBe(2);
    });

    test('should handle array with negative numbers', () => {
        const nums = [-1, 1, -2, 2];
        const k = 0;
        expect(maxOperations(nums, k)).toBe(2);
    });

    test('should handle large numbers', () => {
        const nums = [1000000000, 1000000000];
        const k = 2000000000;
        expect(maxOperations(nums, k)).toBe(1);
    });

    test('should handle single number array', () => {
        const nums = [5];
        const k = 5;
        expect(maxOperations(nums, k)).toBe(0);
    });
});
