# Container With Most Water - LeetCode 11

## Problem Statement
Given an integer array `height` of length `n`, find two vertical lines that together with the x-axis form a container that can hold the most water.

### Examples
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49

Input: height = [1,1]
Output: 1
```

### Constraints
* `n == height.length`
* `2 <= n <= 105`
* `0 <= height[i] <= 104`

## Solution Using Two Pointers

### Implementation
```javascript
var maxArea = function(height) {
    max = 0;
    pointer1 = 0;
    pointer2 = height.length - 1;
    product = 0;

    while(pointer1 < pointer2){
        if(height[pointer1] <= height[pointer2]){
            product = height[pointer1] * (pointer2 - pointer1);
            pointer1++;
        } else{
            product = height[pointer2] * (pointer2 - pointer1);
            pointer2--;
        }
        if (product > max){
            max = product;
        }
    }
    return max;
};
```

### Analysis
- Time Complexity: O(n) where n is length of height array
- Space Complexity: O(1)
- Key Points:
  - Uses two pointers starting from opposite ends
  - Always moves the pointer at smaller height
  - Area calculated using minimum height × width
  - Tracks maximum area seen so far

## Technical Deep Dive

### Two Pointer Strategy
1. **Initialization**
   - pointer1: starts at left end (index 0)
   - pointer2: starts at right end (length - 1)
   - max: tracks maximum area found

2. **Area Calculation**
   - Width = pointer2 - pointer1
   - Height = min(height[pointer1], height[pointer2])
   - Area = width × height

3. **Pointer Movement Logic**
   - Moves pointer with smaller height inward
   - This is optimal because:
     - Width always decreases with each move
     - Only chance for larger area is finding taller height
     - Moving pointer at taller height can never improve result

### Edge Cases and Considerations
- Two element arrays
- Equal heights
- Monotonically increasing/decreasing heights
- All equal heights
- Very large arrays
- Zero heights

### Optimization Notes
1. **Early Exit Conditions**
   - Problem constraints guarantee n ≥ 2, so no need for length check
   - Cannot exit early based on height values due to width factor

2. **Variable Declarations**
   - Could use let/const for stricter scoping
   - Could combine max tracking with Math.max()
   - Product variable could be scoped to while loop

3. **Memory Usage**
   - Solution uses constant extra space
   - All calculations done in-place
   - No auxiliary data structures needed

The solution employs an efficient two-pointer technique that guarantees finding the maximum area in a single pass through the array. The key insight is that moving the pointer at the smaller height is the only way to potentially find a larger area, as moving the larger height pointer would never lead to improvement due to the area being bounded by the minimum height.