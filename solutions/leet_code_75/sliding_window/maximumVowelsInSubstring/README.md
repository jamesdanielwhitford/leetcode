# Maximum Number of Vowels in a Substring - LeetCode 1456

## Problem Statement
Given a string `s` and an integer `k`, return the maximum number of vowel letters in any substring of `s` with length `k`.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

### Example 1:
```
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
```

### Constraints:
* `1 <= s.length <= 105`
* `s` consists of lowercase English letters.
* `1 <= k <= s.length`

## Solution
```javascript
var maxVowels = function(s, k) {
    let res = 0, curr = 0
    let left = 0, right = 0
    for (let i = 0; i < s.length; i++) {
        if (isVowel(s[i])) {
            curr++
        }
        res = Math.max(res, curr)
        if (i >= k-1 && isVowel(s[i-k+1])) {
            curr--
        }
    }
    return res
};

var isVowel = function(letter){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
        return true;
    }
    return false;
};
```

## Detailed Explanation

### 1. Initial Problem Analysis
- We need to find the maximum count of vowels in any k-length substring
- We need to efficiently check for vowels
- We need to track counts as we move through the string
- Must handle the sliding window efficiently

### 2. Key Insight from the Example
Breaking down what happens with "abciiidef", k=3:
- Window "abc": 1 vowel
- Window "bci": 1 vowel
- Window "cii": 2 vowels
- Window "iii": 3 vowels
- Window "iid": 2 vowels
- Window "ide": 2 vowels
- Window "def": 1 vowel

### 3. Pattern Recognition
Each new window differs from the previous by:
- Removing one character from the start
- Adding one character at the end
This suggests a sliding window approach.

### 4. How the Solution Works

#### Variables:
- `res`: tracks maximum vowel count seen
- `curr`: tracks current window's vowel count
- `i`: current position in string

#### Process:
1. For each character:
   - If it's a vowel, increment current count
   - Update maximum if necessary
   - If window is full size (i >= k-1), remove leftmost character's contribution

### 5. Why This Works
- Maintains a running count of vowels in the current window
- Only updates counts when necessary (when adding/removing vowels)
- Efficiently tracks maximum without storing all possible windows

### 6. Efficiency
- Time Complexity: O(n) - single pass through string
- Space Complexity: O(1) - only using a few variables

### 7. Potential Optimizations
1. Could use a Set for vowel checking
2. Could add early termination if max possible vowels reached
3. Could optimize initial window creation
4. Could use bit manipulation for vowel checking

The elegance of this solution lies in its efficient maintenance of the sliding window, only updating counts when necessary and avoiding any need to store substrings.