# Max Number of K-Sum Pairs - LeetCode 1679

## Problem Statement
Given an integer array and a target sum k, find the maximum number of pairs that sum to k. Each element can only be used once, and pairs are removed after being found.

### Examples
```
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: 
- Remove 1 and 4, then nums = [2,3]
- Remove 2 and 3, then nums = []
Two total operations possible.

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation:
- Remove two 3's, then nums = [1,4,3]
One operation possible.
```

### Constraints
* `1 <= nums.length <= 105`
* `1 <= nums[i] <= 109`
* `1 <= k <= 109`

## HashMap Solution

### Implementation
```javascript
var maxOperations = function(nums, k) {
    let map = new Map();
    let count = 0;
    for(let num of nums){
        let target = k - num;
        if(map.has(target) && map.get(target) > 0){
            count++;
            map.set(target, map.get(target)-1)
        } else{
            map.set(num, (map.get(num) || 0) + 1)
        }
    }
    return count;
};
```

### Analysis
- **Time Complexity**: O(n) where n is length of nums
  - Single pass through array
  - Map operations are O(1)
  
- **Space Complexity**: O(n)
  - Map could store up to n elements in worst case
  - Space grows linearly with input size

### Key Concepts

#### 1. Map Data Structure Usage
- Uses JavaScript Map instead of object
- Stores frequency counts of numbers
- Provides O(1) lookup and modification
- Handles numeric keys properly

#### 2. Complement Finding Strategy
- For each number num, look for k-num
- Target = k - num is the complement needed
- Only count pair if complement exists with positive count
- Decrement used numbers to prevent reuse

#### 3. Frequency Management
- Map.get(num) || 0 handles first occurrence
- Decrement counter when using number in pair
- Positive counts indicate available numbers
- Zero counts indicate fully used numbers

## Edge Cases and Test Coverage

### Test Cases
```javascript
describe('maxOperations', () => {
    test('basic case with valid pairs', () => {
        expect(maxOperations([1,2,3,4], 5)).toBe(2);
    });

    test('handles duplicates', () => {
        expect(maxOperations([2,2,2,2], 4)).toBe(2);
    });

    test('empty array returns 0', () => {
        expect(maxOperations([], 5)).toBe(0);
    });

    test('no valid pairs returns 0', () => {
        expect(maxOperations([1,2,3,4], 10)).toBe(0);
    });

    test('handles negative numbers', () => {
        expect(maxOperations([-1,1,-2,2], 0)).toBe(2);
    });

    test('single element array', () => {
        expect(maxOperations([5], 5)).toBe(0);
    });

    test('large numbers', () => {
        expect(maxOperations([1000000000,1000000000], 2000000000)).toBe(1);
    });
});
```

### Important Edge Cases
1. Empty arrays
2. Single element arrays 
3. Arrays with no valid pairs
4. Arrays with duplicate numbers
5. Numbers larger than k
6. Negative numbers
7. Large numbers near constraints

## Common Pitfalls

1. **Object vs Map**
   - Objects convert numeric keys to strings
   - Map preserves numeric key types
   - Map provides better methods for existence checks

2. **Number Reuse**
   - Must prevent using same element twice
   - Frequency tracking handles duplicates correctly
   - Decrementing count prevents reuse

3. **Frequency Management**
   - Need to handle first occurrence (|| 0)
   - Must decrement counts properly
   - Should check for positive counts

4. **Edge Case Handling**
   - Empty array should return 0
   - Single element should return 0
   - No valid pairs should return 0

## Optimization Considerations

1. **Memory Usage**
   - Map only stores unique numbers
   - Could potentially clear zero counts
   - Trade-off between speed and space

2. **Early Exit**
   - Could add checks for impossible cases
   - Empty array or single element
   - All numbers greater than k

3. **Alternative Approaches**
   - Sorting based solution possible O(nlogn)
   - Two pointer approach after sort
   - Trade-off between complexity and speed