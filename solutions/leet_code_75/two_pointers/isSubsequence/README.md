# Is Subsequence - LeetCode 392

## Problem Statement
Given two strings s and t, determine if s is a subsequence of t.

### Examples
```
Input: s = "abc", t = "ahbgdc"
Output: true

Input: s = "axc", t = "ahbgdc"
Output: false
```

### Constraints
* `0 <= s.length <= 100`
* `0 <= t.length <= 104`
* Only lowercase English letters
* Follow-up: Handle multiple input strings efficiently

## Basic Solution

### Implementation
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0;
    let tPointer = 0;
    
    while (sPointer < s.length && tPointer < t.length) {
        if (s[sPointer] === t[tPointer]) {
            sPointer++;
        }
        tPointer++;
    }
    return sPointer === s.length;
};
```

### Analysis
- Time Complexity: O(n) where n is length of t
- Space Complexity: O(1)
- Key Points:
  - Two pointers track position in each string
  - sPointer only advances on matches
  - tPointer always advances
  - Returns true if all s characters are found
  - Sequential scan ensures order preservation

## Follow-up Solution
For handling multiple subsequence checks efficiently.

### Implementation
```javascript
class StringProcessor {
    constructor(t) {
        // Preprocess: create character to indices mapping
        this.charMap = new Map();
        
        for(let i = 0; i < t.length; i++) {
            if(!this.charMap.has(t[i])) {
                this.charMap.set(t[i], []);
            }
            this.charMap.get(t[i]).push(i);
        }
    }
    
    isSubsequence(s) {
        let prevIndex = -1;
        
        for(let char of s) {
            if(!this.charMap.has(char)) return false;
            
            const indices = this.charMap.get(char);
            prevIndex = this.findNextIndex(indices, prevIndex);
            
            if(prevIndex === -1) return false;
        }
        return true;
    }
    
    findNextIndex(indices, prevIndex) {
        let left = 0;
        let right = indices.length - 1;
        let result = -1;
        
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(indices[mid] > prevIndex) {
                result = indices[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return result;
    }
}
```

### Test Cases
```javascript
describe('Is Subsequence', () => {
    test('Basic true case - characters in order with gaps', () => {
        const s = 'abc';
        const t = 'ahbgdc';
        expect(isSubsequence(s,t)).toEqual(true);
    });

    test('Empty s string should return true', () => {
        const s = '';
        const t = 'ahbgdc';
        expect(isSubsequence(s,t)).toEqual(true);
    });

    test('Empty t string with non-empty s should return false', () => {
        const s = 'abc';
        const t = '';
        expect(isSubsequence(s,t)).toEqual(false);
    });

    test('Repeated characters in correct order', () => {
        const s = 'aaa';
        const t = 'aaaaaa';
        expect(isSubsequence(s,t)).toEqual(true);
    });

    test('Same string for s and t', () => {
        const s = 'abc';
        const t = 'abc';
        expect(isSubsequence(s,t)).toEqual(true);
    });
});
```

## Technical Analysis

### Basic Solution Deep Dive
1. **Two Pointer Strategy**
   - sPointer: tracks progress in string s
   - tPointer: tracks progress in string t
   - Ensures characters are found in order

2. **While Loop Condition**
   - Continues while both strings have characters left
   - Automatically handles length mismatches

3. **Character Matching**
   - Only advances sPointer on matches
   - Always advances tPointer
   - Effectively skips non-matching characters

4. **Final Check**
   - sPointer === s.length verifies all characters were found
   - Handles both success and failure cases

### Follow-up Solution Efficiency
- Preprocessing: O(n) time and space
- Each subsequence check: O(m * log n)
  - m is length of input string
  - n is length of original string t
- Multiple checks (k strings): O(n + k * m * log n)

### Edge Cases and Considerations
- Empty strings
- Single characters
- Repeated characters
- Length mismatches
- Character order
- Performance with large strings
- Memory usage for preprocessing

The basic solution uses an elegant two-pointer approach that maintains character order while making a single pass through both strings. For multiple queries, the follow-up solution trades memory for speed by preprocessing the target string, enabling faster subsequent checks through binary search.