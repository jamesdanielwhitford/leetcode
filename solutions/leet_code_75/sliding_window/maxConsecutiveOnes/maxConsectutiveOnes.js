/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let zeros = 0;
    let maxLength = 0;
    
    // Right pointer expands window
    for (let right = 0; right < nums.length; right++) {
        // Count zeros in current window
        if (nums[right] === 0) {
            zeros++;
        }
        
        // If we have too many zeros, shrink window from left
        while (zeros > k) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }
        
        // Current window length is a candidate for max length
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

module.exports = longestOnes;