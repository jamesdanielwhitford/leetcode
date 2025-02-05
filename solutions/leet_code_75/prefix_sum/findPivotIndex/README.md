# Find Pivot Index - LeetCode 724

## Problem Statement
Given an array `nums` of integers, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

### Examples
```
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
```

### Constraints
* `1 <= nums.length <= 10^4`
* `-1000 <= nums[i] <= 1000`

## Solution Using Total Sum Calculation
### Implementation
```javascript
var pivotIndex = function(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // Calculate the right sum by subtracting left sum and the current number
        const rightSum = totalSum - leftSum - nums[i];

        // If left sum equals right sum, we found the pivot index
        if (leftSum === rightSum) {
            return i;
        }

        // Update left sum for the next iteration
        leftSum += nums[i];
    }

    // If no pivot is found, return -1
    return -1;
};
```

### Analysis
- **Time Complexity**: O(n) where `n` is the length of the `nums` array.
  - We perform a single pass to calculate the total sum, then another pass to find the pivot index, resulting in O(n) complexity.
- **Space Complexity**: O(1)
  - Only a few extra variables (`totalSum`, `leftSum`) are used, so the space complexity is constant.
  
- **Key Points**:
  - Uses the total sum of the array to calculate the right sum efficiently.
  - Iterates through the array while maintaining the left sum.
  - Compares left and right sums to find the pivot index.

## Technical Deep Dive
### Pivot Index Strategy
1. **Variable Management**:
   - `totalSum`: Stores the sum of all elements in the array.
   - `leftSum`: Tracks the sum of elements to the left of the current index.
   - `rightSum`: Calculated dynamically as `totalSum - leftSum - current element`.

2. **Pivot Calculation**:
   - At each index, compare `leftSum` and `rightSum`.
   - If they are equal, that index is the pivot index, and it's returned.
   - If no such index is found after the loop, return `-1`.

3. **Efficient Calculation**:
   - By using the total sum, we avoid recalculating the right sum from scratch at each step.
   - We progressively update `leftSum` as we move through the array.

### Edge Cases and Considerations
- **Single Element Array**:
  - The pivot is the only element (index `0`), as the left and right sums are both `0`.

- **Array with all positive numbers**:
  - If the array doesn't have a pivot, return `-1`.

- **Array with all negative numbers**:
  - Same logic applies as with positive numbers.

- **Array with zero values**:
  - Zero values should be handled as any other number when calculating sums.

- **Empty Array**:
  - While the constraints prevent empty arrays, it’s worth noting that an empty array would have no pivot index.

### Optimization Notes
1. **Alternative Approaches**:
   - The solution uses a running total for efficient comparison. This approach works well without additional memory overhead.
   - We could also use a prefix sum array, but that would use extra space (O(n)).

2. **Memory Usage**:
   - The current solution is memory-efficient, using O(1) space aside from the input array and a few variables.

3. **Improvements**:
   - One optimization could be using a single traversal where we dynamically update the left and right sums.

### Common Pitfalls
1. **Index Out of Range**:
   - Ensuring the array is indexed properly is crucial, especially when calculating the right sum.

2. **Incorrect Calculation of Left and Right Sums**:
   - Double-check the formula for the right sum, which is `totalSum - leftSum - current element`.
   - Miscalculating this can lead to incorrect results.

3. **Not Handling Arrays of Different Sizes**:
   - Ensure the solution works for small and large arrays, considering edge cases like arrays with length 1 or large numbers.

### Related Topics and Follow-up
1. **Prefix Sum Pattern**:
   - This problem is an example of the prefix sum technique, which is useful in problems where you need to efficiently calculate the sum of parts of an array.

2. **Variations to Consider**:
   - Finding the pivot index for other array problems, such as minimum sum, max sum, etc.
   - Analyzing the middle index for symmetry in an array.

3. **Similar LeetCode Problems**:
   - **Subarray Sum Equals K** (LeetCode 560)
   - **Running Sum of 1d Array** (LeetCode 1480)
   - **Find the Peak Element** (LeetCode 162)

### Testing Strategy
Test cases should cover:
1. Example cases from the problem statement
2. Edge cases:
   - Single element array
   - Arrays with no pivot index (e.g., all positive or all negative numbers)
   - Arrays with alternating signs
   - Arrays with zero values
3. Large arrays (maximum constraints)
4. Arrays with negative values