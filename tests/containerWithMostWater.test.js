const maxArea = require('../solutions/leet_code_75/two_pointers/containerWithMostWater/containerWithMostWater');

test('Example 1', () => {
    expect(maxArea([1,8,6,2,5,4,8,3,7])).toBe(49);
});

test('Example 2', () => {
    expect(maxArea([1,1])).toBe(1);
});

test('Single element array', () => {
    expect(maxArea([1])).toBe(0);
});

test('Array with two elements', () => {
    expect(maxArea([1, 2])).toBe(1);
});

test('Array with all elements the same', () => {
    expect(maxArea([5, 5, 5, 5, 5])).toBe(20);
});

test('Array with increasing elements', () => {
    expect(maxArea([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(25);
});

test('Array with decreasing elements', () => {
    expect(maxArea([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(25);
});

test('Array with random elements', () => {
    expect(maxArea([3, 1, 2, 4, 5])).toBe(12);
});