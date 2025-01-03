# Longest Subarray of 1's After Deleting One Element - LeetCode 1493
## Problem Statement
Given a binary array `nums`, you should delete one element from it. Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

### Examples
```
Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
```

### Constraints
* `1 <= nums.length <= 105`
* `nums[i]` is either `0` or `1`

## Solution Using Sliding Window
### Implementation
```javascript
var longestSubarray = function(nums) {
    let left = 0;
    let maxLength = 0;
    let zeroes = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] == 0) {
            zeroes++;
        }
        
        if (zeroes > 1) {
            while (nums[left] == 1) {
                left++;
            }
            left++;
            zeroes = 1;
        }
        
        maxLength = Math.max(maxLength, right - left);
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
  - Allows exactly one zero in window (must delete one element)
  - Tracks maximum valid window length

## Technical Deep Dive
### Sliding Window Strategy
1. **Window Management**
   - left: start of window
   - right: end of window
   - zeroes: count of zeros in current window

2. **Window Expansion**
   - Right pointer moves forward
   - Counts zeros encountered
   - Window grows while zeroes ≤ 1

3. **Window Contraction**
   - Left pointer moves when zeroes > 1
   - Skips past ones until finding a zero
   - Resets window to maintain exactly one zero

### Edge Cases and Considerations
- Empty array (handled by constraints)
- All ones (must still delete one element)
- All zeros (return 0)
- Alternating ones and zeros
- Multiple valid windows of same length
- Single element array

### Common Pitfalls
1. **Zero Counting**
   - Not resetting zero count after window contraction
   - Incorrect handling of consecutive zeros

2. **Window Size Calculation**
   - Off-by-one errors in maxLength calculation
   - Not considering window boundaries properly

3. **Window Movement**
   - Inefficient left pointer movement
   - Not handling the case where we must delete one element

### Follow-up Questions to Consider
1. How would you modify the solution to return the position of the element that should be deleted?
2. Can you optimize the solution for arrays with very few zeros?
3. How would you handle streaming data with this algorithm?
4. Can you modify the solution to handle deleting K elements instead of just one?

### Key Implementation Details
1. **Variable Initialization**
   - left pointer starts at 0
   - maxLength tracks longest valid subarray
   - zeroes counts zeros in current window

2. **Window Management Logic**
   - Expands window by incrementing right pointer
   - Contracts window when more than one zero is found
   - Skips ones until finding zero when contracting
   - Updates maxLength after each window change

3. **Return Value**
   - Returns maxLength which represents longest subarray
   - Automatically handles requirement of deleting one element
   - Correctly returns 0 when no valid subarray exists