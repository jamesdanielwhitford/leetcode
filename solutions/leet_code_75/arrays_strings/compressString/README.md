# **String Compression - LeetCode 443**
## **Problem Statement**
Given an array of characters `chars`, compress it in-place using consecutive character counts.

### **Example 1:**
```
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and chars = ["a","2","b","2","c","3"]
```

### **Example 2:**
```
Input: chars = ["a"]
Output: Return 1, and chars = ["a"]
```

### **Example 3:**
```
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: Return 4, and chars = ["a","b","1","2"]
```

### **Constraints:**
* Must modify array in-place
* Use constant extra space
* `1 <= chars.length <= 2000`
* `chars[i]` can be letter, digit, or symbol

## **Solution Analysis**

### **1. Initial Problem Analysis**
- In-place modification required
- Must handle counts ≥ 10 (split into separate digits)
- Need to track both reading and writing positions
- Must return new length after compression

### **2. Key Insights**
Two-pointer approach needed:
- Read pointer: scans through input
- Write pointer: places compressed result
- Start pointer: marks group beginnings

### **3. How the Solution Works**

#### **Key Components:**
```javascript
let read = 0;    // Scanning pointer
let write = 0;   // Writing position
let start;       // Group start marker
```

#### **Main Process:**
1. **Character Group Detection:**
```javascript
while(read < chars.length && chars[read] == char) {
    read++;
}
```
- Advances until different character found
- Counts consecutive occurrences

2. **Writing Process:**
```javascript
chars[write] = char;
write++;
```
- Writes character first
- Then writes count if > 1

3. **Count Handling:**
```javascript
let count = read - start;
if(count > 1) {
    for(let digit of String(count)) {
        chars[write] = digit;
        write++;
    }
}
```
- Calculates group size
- Converts count to individual digits
- Writes each digit separately

### **4. Efficiency**
- Time Complexity: O(n) - single pass through array
- Space Complexity: O(1) - only uses pointers

### **5. Key Implementation Details**
- Handles single characters (no count needed)
- Properly splits multi-digit counts
- Maintains original array ordering
- Returns new compressed length

The elegance of this solution lies in using multiple pointers to track different aspects of the compression process while modifying the array in-place.