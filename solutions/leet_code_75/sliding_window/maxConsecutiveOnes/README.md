# Max Consecutive Ones III - LeetCode 1004

## Problem Statement
Given a binary array `nums` and an integer `k`, return the maximum number of consecutive 1's in the array if you can flip at most `k` 0's.

### Examples
```
Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
```

### Constraints
* `1 <= nums.length <= 105`
* `nums[i]` is either `0` or `1`
* `0 <= k <= nums.length`

## Solution Using Sliding Window
### Implementation
```javascript
var longestOnes = function(nums, k) {
    let left = 0;
    let zeros = 0;
    let maxLength = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeros++;
        }
        
        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};
```

### Analysis
- Time Complexity: O(n) where n is length of nums array
- Space Complexity: O(1)
- Key Points:
  - Uses sliding window technique
  - Maintains count of zeros in current window
  - Shrinks window when zero count exceeds k
  - Tracks maximum valid window length

## Technical Deep Dive
### Sliding Window Strategy
1. **Window Management**
   - left: start of window
   - right: end of window
   - zeros: count of zeros in current window

2. **Window Expansion**
   - Right pointer moves forward
   - Counts zeros encountered
   - Window grows while zeros ≤ k

3. **Window Contraction**
   - Left pointer moves when zeros > k
   - Decrements zero count when needed
   - Window shrinks until valid again

### Edge Cases and Considerations
- Empty array (though constrained by problem)
- k = 0 (no flips allowed)
- k equals array length (all zeros can be flipped)
- All ones
- All zeros
- Alternating ones and zeros
- Multiple valid windows of same length

### Optimization Notes
1. **Early Exit Conditions**
   - Could add check for empty array
   - Could handle k ≥ length of array

2. **Variable Declarations**
   - Could use const for loop variable
   - Could combine maxLength update with Math.max()

3. **Memory Usage**
   - Solution uses constant extra space
   - Only tracks counts and pointers
   - No auxiliary data structures needed

The solution uses the sliding window technique to maintain a valid window of consecutive ones (including flipped zeros). The key insight is that we only need to track the number of zeros in our current window, and when we exceed our flip allowance (k), we need to shrink the window from the left until we're valid again.

### Common Pitfalls
1. **Incorrect Zero Counting**
   - Forgetting to decrement zeros when shrinking window
   - Not handling the case when k = 0

2. **Window Size Calculation**
   - Off-by-one errors in calculating window length
   - Not considering the current position in length calculation

3. **Window Movement**
   - Moving the wrong pointer
   - Not moving the window when zeros = k

### Follow-up Questions to Consider
1. How would you modify the solution to return the positions of zeros that should be flipped?
2. Can you optimize the solution for very sparse arrays (mostly ones)?
3. How would you handle streaming data with this algorithm?
4. Can you modify the solution to handle multiple flip operations with different k values efficiently?