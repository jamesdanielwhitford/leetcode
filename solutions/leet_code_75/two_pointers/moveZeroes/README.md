# Move Zeroes - LeetCode 283

## Problem Statement
Given an array of numbers, move all zeros to the end while maintaining the relative order of non-zero elements.

### Example 1:
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

### Example 2:
```
Input: nums = [0]
Output: [0]
```

### Constraints:
* Must modify array in-place
* Maintain relative order of non-zero elements
* `1 <= nums.length <= 104`
* `-231 <= nums[i] <= 231 - 1`

## Solution Analysis

### 1. Initial Problem Analysis
- In-place modification required
- Order matters for non-zero elements
- Must handle single element arrays
- Zero elements should end up at the end
- Position of zeros relative to each other doesn't matter

### 2. Key Insights
Two main approaches:
1. Two-pointer with swapping:
   - One pointer finds zeros
   - Other finds non-zeros
   - Swap when found
2. Single-pass with fill:
   - Move non-zeros to front
   - Fill remaining with zeros

### 3. How the Solution Works

#### Key Components:
```javascript
let start = 0;  // Position for next non-zero
let i = 0;      // Scanner through array
```

#### Main Process:
1. **Non-Zero Collection:**
```javascript
if(nums[i] !== 0) {
    nums[start++] = nums[i]
}
```
- Places non-zeros at front
- Incrementally builds result

2. **Zero Filling:**
```javascript
nums.fill(0, start)
```
- Fills remaining positions with zeros
- Uses built-in array method

### 4. Efficiency
- Time Complexity: O(n) - single pass through array
- Space Complexity: O(1) - only uses pointers

### 5. Key Implementation Details
- Maintains order of non-zero elements
- Handles arrays of any size
- Works with positive and negative numbers
- Efficiently handles consecutive zeros
- Uses JavaScript's built-in methods effectively

The elegance of this solution lies in its simplicity - rather than swapping elements, it rebuilds the array by collecting non-zeros first, then filling the rest with zeros.