# Maximum Average Subarray I
## Easy

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10^-5 will be accepted.

### Key Concepts:
1. Sliding Window Technique
2. Maximum Value Tracking
3. Floating Point Precision
4. Handling Negative Numbers

### Example 1:
**Input**: nums = [1,12,-5,-6,50,3], k = 4  
**Output**: 12.75000  
**Explanation**: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

### Example 2:
**Input**: nums = [5], k = 1  
**Output**: 5.00000

### Solution Pattern:
1. Calculate initial window sum (first k elements)
2. Slide window through array:
   - Add new element
   - Remove first element of previous window
   - Update maximum if current window average is larger
3. Return maximum average (divide by k)

### Optimal Solution:
```javascript
var findMaxAverage = function(nums, k) {
    let sum = 0;
    // Get initial window sum
    for(let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let maxSum = sum;
    
    // Slide window and keep track of max
    for(let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i-k];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum/k;
};
```

### Time & Space Complexity:
- Time: O(n) where n is length of array
- Space: O(1) constant space used

### Edge Cases to Consider:
1. Array length equals k
2. Single element array
3. All negative numbers
4. Arrays with same values
5. Alternating patterns
6. Floating point precision
7. Extreme values within constraints

### Common Mistakes:
1. Not handling negative numbers correctly
2. Wrong initialization of maximum sum
3. Incorrect window sliding calculation
4. Division timing (when to divide by k)
5. Not considering precision requirements
6. Incorrect indices in sliding window

### Testing Approaches:
```javascript
describe('Find Maximum Average Subarray', () => {
    // Basic functionality tests
    test('should handle the example case correctly', () => {
        expect(findMaxAverage([1,12,-5,-6,50,3], 4)).toBeCloseTo(12.75, 5);
    });

    // Edge cases
    test('should handle when k equals array length', () => {
        expect(findMaxAverage([1,2,3,4], 4)).toBeCloseTo(2.5, 5);
    });

    // Negative numbers
    test('should handle arrays with negative numbers', () => {
        expect(findMaxAverage([-1,-2,-3,-4], 2)).toBeCloseTo(-1.5, 5);
    });

    // Floating point precision
    test('should handle decimal precision', () => {
        expect(findMaxAverage([1,2,3], 3)).toBeCloseTo(2.0, 5);
    });
});
```

### Follow-up Questions:
1. How would you modify this for variable window size?
2. How would you handle it if the array was streamed?
3. What if we needed to return the window position instead of just the average?

### JavaScript-Specific Notes:
1. Use Math.max() for cleaner comparisons
2. Consider floating point precision in JavaScript
3. Use toBeCloseTo() for testing floating point values
4. Handle potential overflow with large numbers

### Debugging Tips:
1. Add console.logs for window sums:
```javascript
console.log(`Initial window: sum=${sum}`);
for(let j = k; j < nums.length; j++) {
    console.log(`Removing ${nums[j-k]}, Adding ${nums[j]}`);
    temp = temp + nums[j] - nums[j-k];
    console.log(`New window sum: ${temp}`);
}
```

2. Track maximum updates:
```javascript
if(sum < temp) {
    console.log(`Updating max from ${sum} to ${temp}`);
    sum = temp;
}
```

### Key Takeaways:
1. Sliding window problems often require careful handling of indices
2. Always consider edge cases, especially with negative numbers
3. Be mindful of floating-point precision in JavaScript
4. Test thoroughly with various input patterns