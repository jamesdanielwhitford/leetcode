/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    // Get initial window sum
    for(let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let maxSum = sum;
    
    // Slide window and keep track of max
    for(let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i-k];
        maxSum = Math.max(maxSum, sum);
    }
    
    return maxSum/k;
};

module.exports = findMaxAverage;
