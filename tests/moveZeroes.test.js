const moveZeroes = require('../solutions/leet_code_75/two_pointers/moveZeroes/moveZeroes');

describe('Move Zeroes', () => {
    // Basic functionality tests
    test('Example case: mixed zeros and non-zeros', () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });

    test('Array with all zeros', () => {
        const nums = [0, 0, 0, 0, 0];
        moveZeroes(nums);
        expect(nums).toEqual([0, 0, 0, 0, 0]);
    });

    test('Array with no zeros', () => {
        const nums = [1, 2, 3, 4, 5];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 4, 5]);
    });

    // Edge cases
    test('Single element array with zero', () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });

    test('Single element array with non-zero', () => {
        const nums = [1];
        moveZeroes(nums);
        expect(nums).toEqual([1]);
    });

    // Special cases
    test('Zeros at the beginning', () => {
        const nums = [0, 0, 1, 2, 3];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 0, 0]);
    });

    test('Zeros at the end', () => {
        const nums = [1, 2, 3, 0, 0];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 0, 0]);
    });

    test('Alternating zeros and non-zeros', () => {
        const nums = [1, 0, 2, 0, 3, 0];
        moveZeroes(nums);
        expect(nums).toEqual([1, 2, 3, 0, 0, 0]);
    });
});