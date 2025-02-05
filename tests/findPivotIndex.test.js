const pivotIndex = require('../solutions/leet_code_75/prefix_sum/findPivotIndex/findPivotIndex');

test('Example 1 from problem statement', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3); // Left sum = 11, Right sum = 11
});

test('Example 2 from problem statement', () => {
    expect(pivotIndex([1, 2, 3])).toBe(-1); // No pivot index
});

test('Example 3 from problem statement', () => {
    expect(pivotIndex([2, 1, -1])).toBe(0); // Left sum = 0, Right sum = 0
});

test('Single element array (pivot index is 0)', () => {
    expect(pivotIndex([5])).toBe(0); // Single element array, pivot is 0
});

test('Array with all positive numbers (no pivot index)', () => {
    expect(pivotIndex([1, 2, 3, 4, 5, 6])).toBe(-1); // No pivot index
});

test('Array with all negative numbers (no pivot index)', () => {
    expect(pivotIndex([-1, -2, -3, -4, -5, -6])).toBe(-1); // No pivot index
});

test('Array with zero values', () => {
    expect(pivotIndex([0, 0, 0, 0, 0])).toBe(0); // Pivot index can be 0, all sums are 0
});

test('No pivot index when left and right sums never match', () => {
    expect(pivotIndex([10, 20, 30, 40, 50])).toBe(-1); // No pivot index
});
