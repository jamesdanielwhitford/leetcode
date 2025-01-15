const largestAltitude = require('../solutions/leet_code_75/prefix_sum/FindTheHighestAltitude/FindTheHighestAltitude');

test('Example 1 from problem statement', () => {
    expect(largestAltitude([-5,1,5,0,-7])).toBe(1);
});

test('Example 2 from problem statement', () => {
    expect(largestAltitude([-4,-3,-2,-1,4,3,2])).toBe(0);
});

test('Single element array', () => {
    expect(largestAltitude([-5])).toBe(0);
});

test('All positive gains', () => {
    expect(largestAltitude([1,2,3,4,5])).toBe(15);
});

test('All negative gains', () => {
    expect(largestAltitude([-1,-2,-3,-4,-5])).toBe(0);
});

test('Alternating gains', () => {
    expect(largestAltitude([1,-1,1,-1,1])).toBe(1);
});

test('Zero gains', () => {
    expect(largestAltitude([0,0,0,0])).toBe(0);
});

test('Large positive then large negative', () => {
    expect(largestAltitude([100,-100])).toBe(100);
});

test('Edge case with max constraint values', () => {
    expect(largestAltitude([100,100,-100,-100])).toBe(200);
});
