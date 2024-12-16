# Product of Array Except Self - LeetCode 238

## Problem Statement

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.
You must write an algorithm that runs in `O(n)` time and without using the division operation.

### Example 1:
```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

### Example 2:
```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

### Constraints:
* `2 <= nums.length <= 105`
* `-30 <= nums[i] <= 30`
* The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

## Solution

```javascript
var productExceptSelf = function(nums) {
    // Initialize the answer array with 1s
    const answer = new Array(nums.length).fill(1);
    
    // First pass: Calculate prefix products from left to right
    let leftRunningProduct = 1;
    for(let i = 0; i < nums.length; i++) {
        answer[i] = leftRunningProduct;   // Store the product of all numbers to the left
        leftRunningProduct *= nums[i];     // Update running product for next position
    }
    
    // Second pass: Multiply by suffix products from right to left
    let rightRunningProduct = 1;
    for(let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= rightRunningProduct;  // Multiply existing prefix by product of all numbers to the right
        rightRunningProduct *= nums[i];     // Update running product for next position
    }
    
    return answer;
};
```

## Detailed Explanation

### 1. Initial Problem Analysis
- We need to find the product of all numbers except self at each position
- Division operation is not allowed (key constraint)
- Must achieve O(n) time complexity
- Example: [1,2,3,4] → [24,12,8,6]

### 2. Key Insight from the Example
Breaking down what we need at each position:
- For position 0 (value=1): answer is 2×3×4
- For position 1 (value=2): answer is 1×3×4
- For position 2 (value=3): answer is 1×2×4
- For position 3 (value=4): answer is 1×2×3

### 3. Pattern Recognition
Each answer is a product of two parts:
- Everything to the left of the position
- Everything to the right of the position
Example for position 1: (1)×(3×4)
- Left part: 1
- Right part: 12

### 4. How the Solution Works

#### First Pass (Left to Right):
```
Array: [1, 2, 3, 4]

i=0: answer[0] = 1 (no numbers to left)
     leftRunning = 1×1 = 1
i=1: answer[1] = 1
     leftRunning = 1×2 = 2
i=2: answer[2] = 2
     leftRunning = 2×3 = 6
i=3: answer[3] = 6
     leftRunning = 6×4 = 24
```

#### Second Pass (Right to Left):
```
i=3: answer[3] = 6×1 = 6
     rightRunning = 1×4 = 4
i=2: answer[2] = 2×4 = 8
     rightRunning = 4×3 = 12
i=1: answer[1] = 1×12 = 12
     rightRunning = 12×2 = 24
i=0: answer[0] = 1×24 = 24
     rightRunning = 24×1 = 24
```

### 5. Why This Works
- First pass: stores at each position the product of everything to its left
- Second pass: multiplies each position by the product of everything to its right
- By updating running products AFTER using them, we ensure we never include the current number in its own result

### 6. Efficiency
- Time Complexity: O(n) - only two passes through the array
- Space Complexity: O(1) extra space - only two variables besides the required output array

The elegance of this solution lies in how it decomposes a seemingly complex multiplication problem into two simple passes through the array, each maintaining a running product that helps build the final answer.